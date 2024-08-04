import "./App.css";
import { Home } from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Theme";
import { Header } from "./components/header/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ShoppingCart } from "./pages/shopping-cart/ShoppingCart";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
