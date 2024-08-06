import { Box, Drawer, Typography } from "@mui/material";
import { IProductCart } from "../../interfaces/ProductCart";

interface IDrawerCart {
  open: boolean;
  onClose: () => void;
  productsCart: IProductCart[];
}
export const DrawerCart = ({ open, onClose, productsCart }: IDrawerCart) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      sx={{
        "& .MuiDrawer-paper": {
          width: 350,
        },
      }}
    >
      <Box sx={{ background: "#DCE7EB", height: "100vh" }}>
        <Box sx={{ background: "#2D3433", padding: 4 }}>
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ color: "#DCE7EB" }}
          >
            Carrito
          </Typography>
        </Box>
        <Box
          sx={{
            width: 400,
            margin: "10px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "red",
          }}
        >
          {productsCart.map((productCart: IProductCart) => (
            <>
              <Box>
                <img src={productCart.image} alt="" />
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
