import { FC, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { CssBaseline, PaletteMode, Theme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TRouter } from "@src/components/pages/router";
import { getTheme, getThemeMode } from "@src/styles/mui/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

const App: FC<{ router: TRouter }> = ({ router }) => {
  const [mode] = useState<PaletteMode>(getThemeMode());
  const theme = useMemo<Theme>(() => getTheme(mode), [mode]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
