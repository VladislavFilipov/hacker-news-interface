import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

import Navbar from "@src/components/layouts/Navbar/Navbar";

const AppLayout = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};

export default AppLayout;
