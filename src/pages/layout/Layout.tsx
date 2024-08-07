import React from "react";
import { Header } from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { DrawerCart } from "../../components/DrawerCart/DrawerCart";
import { useDrawerContext } from "../../contexts/DrawerContext/DrawerCartContext";
import { Box } from "@mui/material";
import { Footer } from "../../components/footer/Footer";

export const Layout = ({ children }: any) => {
  const { show, closeDrawer, productsCart, subTotalPrice } = useDrawerContext();
  return (
    <Box sx={{ background: "#DCE7EB", height: "100vh" }}>
      <Header />
      <Box sx={{ minHeight: "100%" }}>
        <Outlet></Outlet>
      </Box>
      <DrawerCart
        open={show}
        onClose={closeDrawer}
        productsCart={productsCart}
        subtotalPrice={subTotalPrice}
      />
      <Footer />
    </Box>
  );
};
