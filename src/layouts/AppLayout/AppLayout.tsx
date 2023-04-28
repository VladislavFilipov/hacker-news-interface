import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Navbar from "@src/layouts/Header/Header";

import S from "./AppLayout.styles";

const AppLayout = () => {
  return (
    <Box>
      <Navbar />
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
    </Box>
  );
};

export default AppLayout;
