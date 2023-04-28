import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import Api from "@src/api";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";
import { TComment } from "@src/types/comment.types";
import { TStory } from "@src/types/story.types";

const LIMIT = 10;
const useStoryData = (storyId: number) => {
  const story = useQuery({
    queryKey: ["story", storyId],
    queryFn: async () => await Api.getItemById<TStory>(storyId)
  });

  const getNextComments = async (pageParam: number) => {
    if (!story.data?.kids) throw new Error("Error");

    const to = pageParam * LIMIT;
    const curKidsIdsList = story.data?.kids.slice(to - LIMIT, to);

    return await Promise.all(
      curKidsIdsList.map(id => Api.getItemById<TComment>(id))
    );
  };

  const comments = useInfiniteQuery({
    queryKey: ["comments", storyId],
    queryFn: async ({ pageParam = 1 }) => await getNextComments(pageParam),
    enabled: !!(story.data && story.data.kids && story.data.kids.length > 0),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === LIMIT ? allPages.length + 1 : undefined
  });

  const observerRef = useIntersectionObserver(
    () => comments.fetchNextPage(),
    comments.hasNextPage
  );

  return {
    story,
    comments,
    observerRef
  };
};

export default useStoryData;
