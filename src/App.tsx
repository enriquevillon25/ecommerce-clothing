import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />;
    </ThemeProvider>
  );
}

export default App;
