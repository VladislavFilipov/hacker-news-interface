import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import Api from "@src/api";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";
import { TStory } from "@src/types/story.types";

const LIMIT = 10;
const useStoriesList = () => {
  const storyIds = useQuery({
    queryKey: ["storyIds"],
    queryFn: async () => await Api.getNewStoryIds(100),
    refetchInterval: 60000,
    refetchOnMount: false,
    onSuccess: () => {
      if (stories.data) stories.refetch();
    }
  });

  const getNextStories = async (pageParam: number) => {
    if (!storyIds.data) throw new Error("Error");

    const to = pageParam * LIMIT;
    const curStoryIds = storyIds.data.slice(to - LIMIT, to);

    return await Promise.all(
      curStoryIds.map(storyId => Api.getItemById<TStory>(storyId))
    );
  };

  const stories = useInfiniteQuery({
    queryKey: ["stories", storyIds.data],
    queryFn: async ({ pageParam = 1 }) => await getNextStories(pageParam),
    enabled: !!storyIds.data,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === LIMIT ? allPages.length + 1 : undefined,
    refetchOnMount: false
  });

  const observerRef = useIntersectionObserver(
    () => stories.fetchNextPage(),
    stories.hasNextPage
  );

  return {
    storyIds,
    stories,
    observerRef
    // error: idsError || error,
    // isLoading: idsIsLoading || storiesIsLoading,
    // isFetchingNextPage,
    // hasNextPage,
    // observerRef,
    // refetchStoryIds,
    // storyIdsIsFetching
  };
};

export default useStoriesList;
