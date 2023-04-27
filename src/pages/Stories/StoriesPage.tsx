import { Fragment } from "react";

import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import Link from "@src/components/Link/Link";
import RefreshButton from "@src/components/RefreshButton/RefreshButton";
import ScrollLoader from "@src/components/ScrollLoader/ScrollLoader";
import StoryCard from "@src/components/StoryCard/StoryCard";
import useStoriesList from "@src/hooks/queries/useStories";
import StoriesListSkeleton from "@src/pages/Stories/Skeleton";

import S from "./StoriesPage.styles";

const StoriesPage = () => {
  const {
    stories,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    observerRef,
    refetchStoryIds,
    storyIdsIsFetching
  } = useStoriesList();

  return (
    <Box>
      <S.Title>
        <Typography variant="h4">News</Typography>
        <RefreshButton
          isFetching={storyIdsIsFetching}
          clickHandler={refetchStoryIds}
        />
      </S.Title>
      {isLoading || storyIdsIsFetching ? (
        <StoriesListSkeleton />
      ) : (
        <>
          {stories?.pages.map((page, i) => (
            <Fragment key={i}>
              {page.map(story => (
                <Link key={story.id} to={`/${story.id}`} underline="none">
                  <StoryCard story={story} />
                </Link>
              ))}
            </Fragment>
          ))}
          {hasNextPage && (
            // <S.Loader ref={observerRef}>
            //   {isFetchingNextPage && <CircularProgress />}
            // </S.Loader>
            <ScrollLoader
              isFetchingNextPage={isFetchingNextPage}
              ref={observerRef as any}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default StoriesPage;
