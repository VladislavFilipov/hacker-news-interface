import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Link from "@src/components/shared/Link/Link";
import useStoriesList from "@src/queries/useStories";

const StoriesPage = () => {
  const { stories, error, isLoading, isFetchingNextPage, observerRef } =
    useStoriesList();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>ERROR</Typography>;

  return (
    <Box>
      {stories?.pages.map(page => (
        <>
          {page.map(story => (
            <Link key={story.id} to={`/${story.id}`} underline="none">
              <Paper>
                <Typography variant="h5">
                  Story {story.id}: {story.title}
                </Typography>
              </Paper>
            </Link>
          ))}
        </>
      ))}
      <Box ref={observerRef}>
        {isFetchingNextPage ? "Loading..." : "LOADER"}
      </Box>
    </Box>
  );
};

export default StoriesPage;
