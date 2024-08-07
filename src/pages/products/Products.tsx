import { Box, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import { data } from "../../data/Data";
import { IProduct } from "../../interfaces/Product";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const maxPrice = data.reduce(
    (max: any, current: any) => (current.price > max ? current.price : max),
    0
  );
  const minPrice = data.reduce(
    (min: any, current: any) => (current.price < min ? current.price : min),
    data[0].price
  );
  const [value, setValue] = useState([minPrice, maxPrice]);
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [products, setProducts] = useState<IProduct[]>(data);

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Box sx={{ width: "12%", padding: "40px" }}>
        <hr />
        <Typography> Precio</Typography>
        <Slider
          getAriaLabel={() => "Price Range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={[
            { value: minPrice, label: `S/.${value[0]}` },
            {
              value: maxPrice,
              label: `S/.${value[1]}`,
            },
          ]}
          min={minPrice}
          max={maxPrice}
          sx={{
            "& .MuiSlider-thumb": {
              height: 12,
              width: 12,
            },
            "& .MuiSlider-rail": {
              height: 1.1,
            },
            "& .MuiSlider-track": {
              height: 1.1,
            },
          }}
        />
        <hr />
      </Box>
      <Box>
        <Typography>Todos los productos</Typography>
        <Typography variant="h3">
          Esta es la descripción de tu categoría. Es un excelente lugar para
          conectarte con tu audiencia y contarles más a tus clientes sobre esta
          categoría y sus productos.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{products.length} productos </Typography>
          <Typography>Ordenar por: Lo más nuevo </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
            gap: 2,
          }}
        >
          {products.map((product: IProduct) => (
            <ProductCard
              key={product.idProduct}
              image={product.image}
              name={product.name}
              price={product.price}
              onClick={() => navigate(`/detail/${product.idProduct}`)}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};
