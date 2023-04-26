import { FC, useMemo, useState } from "react";

import {
  Container,
  CssBaseline,
  PaletteMode,
  Theme,
  ThemeProvider
} from "@mui/material";

import { getTheme, getThemeMode } from "@src/styles/mui/theme";

const App: FC = () => {
  const [mode] = useState<PaletteMode>(getThemeMode());
  const theme = useMemo<Theme>(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit
        nihil rem obcaecati eligendi doloribus numquam quas ducimus. Quam,
        nostrum!
      </Container>
    </ThemeProvider>
  );
};

export default App;
