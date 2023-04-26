import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import storiesApi from "@src/api/stories.api";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";

const LIMIT = 10;
const useStoriesList = () => {
  const {
    data: idsList,
    error: idsError,
    isLoading: idsIsLoading
  } = useQuery({
    queryKey: ["idsList"],
    queryFn: async () => await storiesApi.getIdsList(100)
  });

  const getNextStories = async (pageParam: number) => {
    if (!idsList) throw new Error("Error");

    const to = pageParam * LIMIT;
    const curIdsList = idsList.slice(to - LIMIT, to);

    return await Promise.all(curIdsList.map(storiesApi.getById));
  };

  const {
    data: stories,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ["stories"],
    queryFn: async ({ pageParam = 1 }) => await getNextStories(pageParam),
    enabled: !!idsList,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === LIMIT ? allPages.length + 1 : undefined
  });

  const observerRef = useIntersectionObserver(
    () => fetchNextPage(),
    hasNextPage
  );

  return {
    stories,
    error: idsError || error,
    isLoading: idsIsLoading,
    isFetchingNextPage,
    observerRef
  };
};

export default useStoriesList;
