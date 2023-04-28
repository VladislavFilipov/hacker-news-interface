import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ErrorPage from "@src/styles/ErrorPage.styles";

const ErrorFallback: FC = () => {
  const navigate = useNavigate();
  return (
    <ErrorPage.Body>
      <Typography variant="h1">Error</Typography>
      <Typography variant="h4">Oops... try to reload page</Typography>

      <ErrorPage.Btns>
        <Button variant="contained" onClick={() => navigate(0)}>
          Reload
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/");
            navigate(0);
          }}
        >
          Home
        </Button>
      </ErrorPage.Btns>
    </ErrorPage.Body>
  );
};

export default ErrorFallback;
