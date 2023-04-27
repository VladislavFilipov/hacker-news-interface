import { useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Comment from "@src/pages/Story/Comment";
import useStoryData from "@src/queries/useStoryData";

const StoryPage = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();

  const {
    story,
    comments,
    refetchComments,
    error,
    isLoading,
    isFetchingNextPage,
    observerRef
  } = useStoryData(Number(newsId));

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

      <Button onClick={() => refetchComments()}>refetchComments</Button>
      {comments && (
        <Box>
          {comments.pages.map(page =>
            page.map(comment => <Comment key={comment.id} comment={comment} />)
          )}
        </Box>
      )}
      <Box ref={observerRef}>LOADER</Box>
    </Box>
  );
};

export default StoryPage;
