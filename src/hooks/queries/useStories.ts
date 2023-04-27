import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import Api from "@src/api";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";
import { TStory } from "@src/types/story.types";

const LIMIT = 10;
const useStoriesList = () => {
  const {
    data: storyIds,
    error: idsError,
    isLoading: idsIsLoading,
    isFetching: storyIdsIsFetching,
    refetch: refetchStoryIds
  } = useQuery({
    queryKey: ["storyIds"],
    queryFn: async () => await Api.getNewStoryIds(100),
    refetchInterval: 60000,
    refetchOnMount: false,
    onSuccess: () => {
      if (stories) refetchStories();
    }
  });

  const getNextStories = async (pageParam: number) => {
    if (!storyIds) throw new Error("Error");

    const to = pageParam * LIMIT;
    const curStoryIds = storyIds.slice(to - LIMIT, to);

    return await Promise.all(
      curStoryIds.map(storyId => Api.getItemById<TStory>(storyId))
    );
  };

  const {
    data: stories,
    error,
    isLoading: storiesIsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch: refetchStories
  } = useInfiniteQuery({
    queryKey: ["stories", storyIds],
    queryFn: async ({ pageParam = 1 }) => await getNextStories(pageParam),
    enabled: !!storyIds,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === LIMIT ? allPages.length + 1 : undefined,
    refetchOnMount: false
  });

  const observerRef = useIntersectionObserver(
    () => fetchNextPage(),
    hasNextPage
  );

  return {
    storyIds,
    stories,
    error: idsError || error,
    isLoading: idsIsLoading || storiesIsLoading,
    isFetchingNextPage,
    hasNextPage,
    observerRef,
    refetchStoryIds,
    storyIdsIsFetching
  };
};

export default useStoriesList;
