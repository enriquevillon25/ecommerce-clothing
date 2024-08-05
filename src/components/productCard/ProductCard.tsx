import { Typography } from "@mui/material";
import React from "react";

interface IProductCard {
  image: string;
  name: string;
  price: number;
}
export const ProductCard = ({ image, name, price }: IProductCard) => {
  return (
    <div>
      <img
        src={image}
        alt={name}
        style={{ height: "80%", width: "100%", objectFit: "cover" }}
      />
      <Typography>{name}</Typography>
      <Typography>{price}</Typography>
    </div>
  );
};
