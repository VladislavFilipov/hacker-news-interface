import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Link from "@src/components/Link/Link";
import useStoriesList from "@src/queries/useStories";

import S from "./StoriesPage.styles";

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
              <S.Wrap variant="elevation" elevation={10}>
                <S.Title variant="h6">
                  Story {story.id}: {story.title}
                </S.Title>
              </S.Wrap>
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
