import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

import Navbar from "@src/layouts/Navbar/Navbar";

import * as S from "./AppLayout.styles";

const AppLayout = () => {
  return (
    <Box>
      <Navbar />
      <S.Container maxWidth="md">
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </S.Container>
    </Box>
  );
};

export default AppLayout;
