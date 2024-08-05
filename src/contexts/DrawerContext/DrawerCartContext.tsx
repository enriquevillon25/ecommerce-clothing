import React, { createContext, useContext, useState } from "react";

interface IDrawerContext {
  show: boolean;
  closeDrawer: () => void;
  openDrawer: () => void;
}

const DrawerContext = createContext<IDrawerContext>({
  show: false,
  closeDrawer: () => {},
  openDrawer: () => {},
});

export const DrawerCartProvider = ({ children }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const closeDrawer = () => {
    setShow(false);
  };
  const openDrawer = () => {
    setShow(true);
  };
  return (
    <DrawerContext.Provider value={{ show, closeDrawer, openDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => useContext(DrawerContext);
