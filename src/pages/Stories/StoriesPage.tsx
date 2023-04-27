import { Fragment } from "react";

import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import Link from "@src/components/Link/Link";
import StoryCard from "@src/components/StoryCard/StoryCard";
import useStoriesList from "@src/queries/useStories";

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

  if (isLoading || storyIdsIsFetching)
    return <Typography>Loading...</Typography>;

  return (
    <Box>
      <S.Title>
        <Typography variant="h4">News</Typography>
        <IconButton onClick={() => refetchStoryIds()}>
          {storyIdsIsFetching ? (
            <CircularProgress size={24} />
          ) : (
            <RefreshIcon />
          )}
        </IconButton>
      </S.Title>
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
        <S.Loader ref={observerRef}>
          {isFetchingNextPage && <CircularProgress />}
        </S.Loader>
      )}
    </Box>
  );
};

export default StoriesPage;
