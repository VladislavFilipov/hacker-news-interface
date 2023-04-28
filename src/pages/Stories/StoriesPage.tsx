import { Fragment } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Link from "@src/components/Link/Link";
import LoadingWrap from "@src/components/LoadingWrap/LoadingWrap";
import RefreshButton from "@src/components/RefreshButton/RefreshButton";
import ScrollLoader from "@src/components/ScrollLoader/ScrollLoader";
import StoryCard from "@src/components/StoryCard/StoryCard";
import useStoriesList from "@src/hooks/queries/useStories";
import StoriesListSkeleton from "@src/pages/Stories/Skeleton";

import S from "./StoriesPage.styles";

const StoriesPage = () => {
  const { storyIds, stories, observerRef } = useStoriesList();

  return (
    <Box>
      <S.Title>
        <Typography variant="h4">News</Typography>
        <RefreshButton
          isFetching={storyIds.isFetching}
          clickHandler={storyIds.refetch}
        />
      </S.Title>
      <LoadingWrap
        isLoading={
          storyIds.isLoading || storyIds.isFetching || stories.isLoading
        }
        error={
          (storyIds.isError || stories.isError) &&
          new Error("Failed to load news")
        }
        skeleton={<StoriesListSkeleton />}
        repeatHandler={storyIds.refetch}
      >
        <>
          {stories.data?.pages.map((page, i) => (
            <Fragment key={i}>
              {page.map(story => (
                <Link key={story.id} to={`/${story.id}`} underline="none">
                  <StoryCard story={story} />
                </Link>
              ))}
            </Fragment>
          ))}
          {stories.hasNextPage && (
            <Box ref={observerRef}>
              <ScrollLoader isFetchingNextPage={stories.isFetchingNextPage} />
            </Box>
          )}
        </>
      </LoadingWrap>
    </Box>
  );
};

export default StoriesPage;
