import React, { createContext, useContext, useState } from "react";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { IProduct } from "../../interfaces/Product";
import { IProductCart } from "../../interfaces/ProductCart";

interface IDrawerContext {
  show: boolean;
  closeDrawer: () => void;
  openDrawer: () => void;
  addCartOpen: (product: IProduct, quantity: number) => void;
  productsCart: IProductCart[];
  subTotalPrice: number;
  showModalLimit: boolean;
  handleCloseModalLimit: () => void;
  handleOpenModalLimit: () => void;
}

const DrawerContext = createContext<IDrawerContext>({
  show: false,
  closeDrawer: () => {},
  openDrawer: () => {},
  addCartOpen: () => {},
  productsCart: [],
  subTotalPrice: 0,
  showModalLimit: false,
  handleCloseModalLimit: () => {},
  handleOpenModalLimit: () => {},
});

export const DrawerCartProvider = ({ children }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const {
    addCart,
    productsCart,
    totalPay,
    showModalLimit,
    handleCloseModalLimit,
    handleOpenModalLimit,
  } = useShoppingCart();
  const closeDrawer = () => {
    setShow(false);
  };
  const openDrawer = () => {
    setShow(true);
  };

  const addCartOpen = (product: IProduct, quantity: number) => {
    addCart(product, quantity);
    openDrawer();
  };
  return (
    <DrawerContext.Provider
      value={{
        show,
        closeDrawer,
        openDrawer,
        addCartOpen,
        productsCart,
        subTotalPrice: totalPay(),
        showModalLimit,
        handleCloseModalLimit,
        handleOpenModalLimit,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => useContext(DrawerContext);
