// src/mui/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003B73", // DYP-like dark blue
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0059B3",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F4F8FF",
      paper: "#ffffff",
    },
    text: {
      primary: "#0b2545",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    button: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
});

export default theme;
