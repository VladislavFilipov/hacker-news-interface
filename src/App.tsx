import { FC, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { CssBaseline, PaletteMode, Theme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import useStorage from "@src/hooks/useStorage";
import { TRouter } from "@src/pages/router";
import globalStyles from "@src/styles/mui/global";
import { getTheme, getThemeMode } from "@src/styles/mui/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

const theme = getTheme("dark");
const App: FC<{ router: TRouter }> = ({ router }) => {
  // const [mode] = useStorage<PaletteMode>("themeMode", "dark");
  // console.log("APP mode", mode);

  // const theme = useMemo<Theme>(() => getTheme("dark"), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
