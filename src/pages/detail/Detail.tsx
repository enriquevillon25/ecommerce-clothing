import React, { useCallback, useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TextField, Typography } from "@mui/material";
import { data } from "../../data/Data";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/Product";
import { useDrawerContext } from "../../contexts/DrawerContext/DrawerCartContext";
import { AlertModal } from "../../components/alertModal/AlertModal";
import { IProductCart } from "../../interfaces/ProductCart";

export const Detail = () => {
  const {
    addCartOpen,
    productsCart,
    showModalLimit,
    handleCloseModalLimit,
    handleOpenModalLimit,
  } = useDrawerContext();
  const { id } = useParams();
  const min = 1;
  const max = 2;
  const [quantity, setQuantity] = useState(min);
  const [product, setProduct] = useState<IProduct>(data[0]);
  const [productByCart, setProductByCart] = useState<IProductCart>();

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    const productCart = productsCart.find(
      (productCart) => productCart.idProduct === product.idProduct
    );
    setProductByCart(productCart);
    if (productCart?.amount === 2) {
      setQuantity(1);
      return;
    }
    if (
      !isNaN(value) &&
      value >= min &&
      value <= (productCart?.amount === 1 ? 1 : max)
    ) {
      setQuantity(value);
    }
  };

  const findProduct = useCallback(() => {
    const productId = data.find(
      (product: IProduct) => product.idProduct === Number(id)
    );
    setProduct(productId);
  }, [id]);

  const handleOnClicKAddProduct = () => {
    const productCart = productsCart.find(
      (productCart) => productCart.idProduct === product.idProduct
    );
    setProductByCart(productCart);
    if (productCart?.amount === 2) {
      handleOpenModalLimit();
    }

    if (productCart?.amount !== 2) {
      console.log("entro", productCart);
      addCartOpen(product, quantity);
    }
  };

  useEffect(() => {
    if (id) {
      findProduct();
    }
  }, [id, findProduct]);

  return (
    <div>
      <div style={{ margin: "140px calc((100% - 980px)* 0.5)" }}>
        <div style={{ display: "flex" }}>
          <img
            src={product.image}
            style={{ width: "40%" }}
            alt={`${product.name}`}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 20px",
            }}
          >
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="h2">{product.price}</Typography>
            <span> Cantidad</span>
            <TextField
              type="number"
              value={quantity}
              onChange={handleChange}
              inputProps={{ min, max }}
              size="small"
              variant="outlined"
              style={{ width: "60px", margin: "0 10px", background: "white" }}
            />
            <button onClick={handleOnClicKAddProduct}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <AlertModal open={showModalLimit} handleClose={handleCloseModalLimit} />
    </div>
  );
};
