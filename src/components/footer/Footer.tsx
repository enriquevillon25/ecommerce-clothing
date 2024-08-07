import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box>Síguenos en Instagram:</Box>
        <Box>@AuraBonita_</Box>
      </Box>
      <Box>
        <Typography>993-313-143</Typography>
        <Typography>aurabonita.pe@gmail.com</Typography>
        <Typography>
          Av Javier Prado Oeste 875, San Isidro. Lima, Perú
        </Typography>
      </Box>
    </Box>
  );
};
