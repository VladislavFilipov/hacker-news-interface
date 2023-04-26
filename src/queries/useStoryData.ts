import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import storiesApi from "@src/api/stories.api";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";

const LIMIT = 10;
const useStoryData = (storyId: number) => {
  const {
    data: story,
    error: storyError,
    isLoading
  } = useQuery({
    queryKey: ["story", storyId],
    queryFn: async () => await storiesApi.getById(storyId)
  });
  console.log("story", story);
  const getNextComments = async (pageParam: number) => {
    console.log("getNextComments story", story);

    if (!story?.kids) throw new Error("Error");

    const to = pageParam * LIMIT;
    const curKidsIdsList = story?.kids.slice(to - LIMIT, to);

    return await Promise.all(curKidsIdsList.map(storiesApi.getCommentById));
  };

  console.log(
    "story && story.kids && story.kids.length > 0",
    !!story && !!story.kids && story.kids.length > 0
  );

  const {
    data: comments,
    error: commentsError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ["comments"],
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
    error: storyError || commentsError,
    isLoading,
    isFetchingNextPage,
    observerRef
  };
};

export default useStoryData;
