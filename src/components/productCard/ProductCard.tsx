import { Typography } from "@mui/material";
import React from "react";

interface IProductCard {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
}
export const ProductCard = ({ image, name, price, onClick }: IProductCard) => {
  return (
    <div onClick={onClick}>
      <img
        src={image}
        alt={name}
        style={{ height: "80%", width: "100%", objectFit: "cover" }}
      />
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h3">{`S/.${price}`}</Typography>
    </div>
  );
};
