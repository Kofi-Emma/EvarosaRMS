import { createTheme } from "@mui/material/styles";

export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },

  primary: {
    100: "#ffcccc",
    200: "#ff9999",
    300: "#ff6666",
    400: "#ff3333",
    500: "#ff0000",
    600: "#cc0000",
    700: "#990000",
    800: "#660000",
    900: "#330000",
  },

  background: {
    light: "#e1e2e7",
    main: "#1f2026",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[600],
      light: tokens.primary[500],
    },
    grey: {
      ...tokens.grey,
      light: tokens.grey[100],
      main: tokens.grey[300],
      dark: tokens.grey[500],
    },

    background: {
      default: tokens.background.light,
      dark: tokens.background.main,
    },
  },

  typography: {
    fontFamily: ["Lucida Sans", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Lucida Sans", "sans-serif"].join(","),
      fontSize: 32,
    },

    h2: {
      fontFamily: ["Lucida Sans", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Lucida Sans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Lucida Sans", "sans-serif"].join(","),
      fontSize: 14,
    },
    h5: {
      fontFamily: ["Lucida Sans", "sans-serif"].join(","),
      fontSize: 10,
    },
  },
});
