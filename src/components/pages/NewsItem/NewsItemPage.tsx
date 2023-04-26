import { useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NewsItemPage = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  return (
    <Box>
      <Button onClick={() => navigate(-1)}>Back</Button>
      NewsItemPage
      <br />
      <Typography>id: {newsId}</Typography>
    </Box>
  );
};

export default NewsItemPage;
