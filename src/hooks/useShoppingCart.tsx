import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import { IProductCart } from "../interfaces/ProductCart";

export const useShoppingCart = () => {
  const maxAmountProduct = 2;

  const [productsCart, setProductsCart] = useState<IProductCart[]>([]);
  useEffect(() => {
    console.log("productsCartproductsCart", productsCart);
  }, [productsCart]);

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
    }

    // if (productCart?.amount === 2) return;
    // const newProductsCart = productsCart.map((productCart: IProductCart) => {
    //   return productCart.idProduct === product.idProduct
    //     ? {
    //         ...productCart,
    //         amount: productCart.amount + quantity,
    //         totalPrice: productCart.price * productCart.amount + quantity,
    //       }
    //     : { ...productCart };
    // });

    // setProductsCart(newProductsCart);
  };

  return { productsCart, addCart };
};
