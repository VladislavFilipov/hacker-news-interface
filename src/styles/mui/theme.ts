import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: deepOrange
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

export const getTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));

const storageThemeModeKey = "themeMode";
export const getThemeMode = (): PaletteMode => {
  const storageMode = localStorage.getItem(storageThemeModeKey) as PaletteMode;

  if (!storageMode) {
    localStorage.setItem(storageThemeModeKey, "dark");
    return "dark";
  }

  return storageMode;
};
