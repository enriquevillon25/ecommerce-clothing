import { createTheme } from "@mui/material";
// import "../style/fonts.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgb(237, 234, 231)",
    },
  },
  typography: {
    fontFamily: "Futura Light, Arial, sans-serif",
    caption: {
      fontFamily: "Cormorant Garamond",
      fontSize: 18,
    },
    h3: {
      fontSize: "16px",
      lineHeight: "1.5em",
    },
  },
});
