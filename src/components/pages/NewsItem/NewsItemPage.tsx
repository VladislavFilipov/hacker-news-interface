import { useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useStoryData from "@src/queries/useStoryData";

const NewsItemPage = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();

  const { story, comments, error, isLoading, isFetchingNextPage, observerRef } =
    useStoryData(Number(newsId));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>ERROR</Typography>;

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>Back</Button>

      <br />

      {story && (
        <Box>
          <Typography>{story.title}</Typography>
        </Box>
      )}

      {comments && (
        <Box>
          {comments.pages.map(page =>
            page.map(comment => (
              <Typography key={comment.id}>{comment.text}</Typography>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default NewsItemPage;
