import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import ErrorFallback from "@src/components/ErrorFallback/ErrorFallback";
import Navbar from "@src/layouts/Header/Header";

import S from "./AppLayout.styles";

const AppLayout = () => {
  return (
    <Box>
      <Navbar />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <S.Container maxWidth="md">
          <Suspense
            fallback={
              <S.SuspenseFallback>
                <CircularProgress />
              </S.SuspenseFallback>
            }
          >
            <Outlet />
          </Suspense>
        </S.Container>
      </ErrorBoundary>
    </Box>
  );
};

export default AppLayout;
