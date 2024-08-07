import React, { useCallback, useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import { IProductCart } from "../interfaces/ProductCart";

export const useShoppingCart = () => {
  const maxAmountProduct = 2;

  const [productsCart, setProductsCart] = useState<IProductCart[]>([]);
  const [showModalLimit, setShowModalLimit] = useState<boolean>(false);

  const addCart = (product: IProduct, quantity: number) => {
    const productCart = productsCart.find((productCart) => {
      return productCart.idProduct === product.idProduct;
    });
    if (!productCart) {
      const newProductCart: IProductCart = {
        ...product,
        id: product.idProduct,
        amount: quantity,
        totalPrice: quantity * product.price,
      };

      setProductsCart([...productsCart, newProductCart]);
      return;
    }

    if (productCart?.amount === maxAmountProduct) {
      setShowModalLimit(true);
      return;
    }

    const newProductsCart = productsCart.map((productCart: IProductCart) => {
      return productCart.idProduct === product.idProduct
        ? {
            ...productCart,
            amount: productCart.amount + quantity,
            totalPrice: productCart.price * (productCart.amount + quantity),
          }
        : { ...productCart };
    });

    setProductsCart(newProductsCart);
  };

  const totalPay = useCallback(() => {
    return productsCart.reduce((accu: number, current: any) => {
      return accu + current.totalPrice;
    }, 0);
  }, [productsCart]);

  const handleCloseModalLimit = () => {
    setShowModalLimit(false);
  };
  const handleOpenModalLimit = () => {
    setShowModalLimit(true);
  };

  useEffect(() => {
    totalPay();
  }, [productsCart, totalPay]);

  return {
    productsCart,
    addCart,
    totalPay,
    showModalLimit,
    handleCloseModalLimit,
    handleOpenModalLimit,
  };
};
