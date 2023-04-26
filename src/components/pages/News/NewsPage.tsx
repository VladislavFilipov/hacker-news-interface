import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Link from "@src/components/shared/Link/Link";
import useStoriesList from "@src/queries/useStories";

const NewsPage = () => {
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
                {/* <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            error? Neque, laboriosam. Sed adipisci repellendus, dicta impedit
            consequuntur molestias necessitatibus.
          </Typography> */}
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

export default NewsPage;
