import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Link from "@src/components/shared/Link/Link";

const NewsPage = () => {
  return (
    <Box>
      <Link to="/1" underline="none">
        <Paper>
          <Typography variant="h5">First news item</Typography>
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            error? Neque, laboriosam. Sed adipisci repellendus, dicta impedit
            consequuntur molestias necessitatibus.
          </Typography>
        </Paper>
      </Link>
    </Box>
  );
};

export default NewsPage;
