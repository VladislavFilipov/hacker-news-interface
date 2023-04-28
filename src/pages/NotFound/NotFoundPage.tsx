import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "@src/components/Link/Link";
import ErrorPage from "@src/styles/ErrorPage.styles";

const NotFoundPage = () => {
  return (
    <ErrorPage.Body>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <Link to="/">
        <Button variant="outlined">Home</Button>
      </Link>
    </ErrorPage.Body>
  );
};

export default NotFoundPage;
