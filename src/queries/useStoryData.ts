import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import Api from "@src/api";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";
import { TComment } from "@src/types/comment.types";
import { TStory } from "@src/types/story.types";

const LIMIT = 10;
const useStoryData = (storyId: number) => {
  const {
    data: story,
    error: storyError,
    isLoading
  } = useQuery({
    queryKey: ["story", storyId],
    queryFn: async () => await Api.getItemById<TStory>(storyId)
  });

  const getNextComments = async (pageParam: number) => {
    if (!story?.kids) throw new Error("Error");

    const to = pageParam * LIMIT;
    const curKidsIdsList = story?.kids.slice(to - LIMIT, to);

    return await Promise.all(
      curKidsIdsList.map(id => Api.getItemById<TComment>(id))
    );
  };

  const {
    data: comments,
    error: commentsError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch: refetchComments
  } = useInfiniteQuery({
    queryKey: ["comments", storyId],
    queryFn: async ({ pageParam = 1 }) => await getNextComments(pageParam),
    enabled: !!(story && story.kids && story.kids.length > 0),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === LIMIT ? allPages.length + 1 : undefined
  });

  const observerRef = useIntersectionObserver(
    () => fetchNextPage(),
    hasNextPage
  );

  return {
    story,
    comments,
    refetchComments,
    error: storyError || commentsError,
    isLoading,
    isFetchingNextPage,
    observerRef
  };
};

export default useStoryData;
