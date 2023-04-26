import { FC, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";

import {
  Container,
  CssBaseline,
  PaletteMode,
  Theme,
  ThemeProvider
} from "@mui/material";

import { TRouter } from "@src/components/pages/router";
import { getTheme, getThemeMode } from "@src/styles/mui/theme";

const App: FC<{ router: TRouter }> = ({ router }) => {
  const [mode] = useState<PaletteMode>(getThemeMode());
  const theme = useMemo<Theme>(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
