import "./App.css";
import { Home } from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ShoppingCart } from "./pages/shopping-cart/ShoppingCart";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Profile } from "./pages/profile/Profile";
import { Suspense } from "react";
import { Layout } from "./pages/layout/Layout";
import { DrawerCartProvider } from "./contexts/DrawerContext/DrawerCartContext";
import { Products } from "./pages/products/Products";
import { Detail } from "./pages/detail/Detail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerCartProvider>
        <BrowserRouter>
          <Suspense fallback={<div> loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/tienda" element={<Products />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </DrawerCartProvider>
    </ThemeProvider>
  );
}

export default App;
