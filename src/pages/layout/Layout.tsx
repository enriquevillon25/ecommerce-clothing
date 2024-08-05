import React from "react";
import { Header } from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { DrawerCart } from "../../components/DrawerCart/DrawerCart";
import { useDrawerContext } from "../../contexts/DrawerContext/DrawerCartContext";
import { Box } from "@mui/material";

export const Layout = ({ children }: any) => {
  const { show, closeDrawer } = useDrawerContext();
  return (
    <Box sx={{ background: "#DCE7EB" }}>
      <Header />
      <Box sx={{ height: "90vh" }}>
        <Outlet></Outlet>
      </Box>
      <DrawerCart open={show} onClose={closeDrawer} />
    </Box>
  );
};
