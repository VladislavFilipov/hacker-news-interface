import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  fetchNextPage: () => void,
  hasNextPage: boolean | undefined
) => {
  const observerRef = useRef();
  useEffect(() => {
    const element = observerRef.current;
    if (!element || !hasNextPage) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(handleObserver);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [hasNextPage]);
  return observerRef;
};

export default useIntersectionObserver;
