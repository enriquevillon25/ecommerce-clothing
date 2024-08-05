import React from "react";
import { Header } from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { DrawerCart } from "../../components/DrawerCart/DrawerCart";
import { useDrawerContext } from "../../contexts/DrawerContext/DrawerCartContext";

export const Layout = ({ children }: any) => {
  const { show, closeDrawer } = useDrawerContext();
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <DrawerCart open={show} onClose={closeDrawer} />
    </div>
  );
};
