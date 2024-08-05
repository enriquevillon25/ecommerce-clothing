import { Box, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import { data } from "../../data/Data";
import { IProduct } from "../../interfaces/Product";
import { ProductCard } from "../../components/productCard/ProductCard";

export const Products = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const maxPrice = Math.floor(
    data.reduce(
      (max: any, current: any) => (current.price > max ? current.price : max),
      0
    )
  );
  const minPrice = Math.floor(
    data.reduce(
      (min: any, current: any) => (current.price < min ? current.price : min),
      data[0].price
    )
  );

  const [value, setValue] = useState([minPrice, maxPrice]);

  const [products, setProducts] = useState<IProduct[]>(data);

  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ width: "10%", padding: "20px" }}>
        <Typography> Precio</Typography>
        <Slider
          getAriaLabel={() => "Price Range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={[
            { value: minPrice, label: `${minPrice}` },
            {
              value: maxPrice,
              label: `${maxPrice}`,
            },
          ]}
          min={minPrice}
          max={maxPrice}
          sx={{
            // Ajusta este valor para cambiar el grosor del slider
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
      </Box>
      <Box>
        <Typography>Todos los productos</Typography>
        <Typography>
          Esta es la descripción de tu categoría. Es un excelente lugar para
          conectarte con tu audiencia y contarles más a tus clientes sobre esta
          categoría y sus productos.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
            gap: 2,
            padding: 2,
          }}
        >
          {products.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};
