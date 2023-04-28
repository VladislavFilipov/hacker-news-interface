import { FC, PropsWithChildren, ReactNode } from "react";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

type TProps = {
  isLoading: boolean;
  error: unknown;
  skeleton?: ReactNode;
  repeatHandler?: () => void;
};
const LoadingWrap: FC<PropsWithChildren<TProps>> = ({
  isLoading,
  error,
  skeleton,
  children,
  repeatHandler
}) => {
  return (
    <>
      {isLoading ? (
        skeleton ?? <CircularProgress size={24} />
      ) : error ? (
        <Alert
          severity="error"
          action={
            repeatHandler && (
              <Button onClick={() => repeatHandler()} color="inherit">
                Repeat
              </Button>
            )
          }
        >
          {error instanceof Error ? error.message : error.toString()}
        </Alert>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingWrap;
