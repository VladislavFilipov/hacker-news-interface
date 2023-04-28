import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "@src/components/Link/Link";

import S from "./NotFoundPage.styles";

const NotFoundPage = () => {
  return (
    <S.Body>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <Link to="/">
        <Button variant="outlined">Home</Button>
      </Link>
    </S.Body>
  );
};

export default NotFoundPage;
