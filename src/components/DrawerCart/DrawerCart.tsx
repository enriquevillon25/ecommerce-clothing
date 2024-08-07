import { Box, Drawer, Typography } from "@mui/material";
import { IProductCart } from "../../interfaces/ProductCart";

interface IDrawerCart {
  open: boolean;
  onClose: () => void;
  productsCart: IProductCart[];
  subtotalPrice: number;
}
export const DrawerCart = ({
  open,
  onClose,
  productsCart,
  subtotalPrice,
}: IDrawerCart) => {
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
            margin: "10px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {productsCart.map((productCart: IProductCart) => (
            <Box key={productCart.id} sx={{ display: "flex" }}>
              <img src={productCart.image} alt="" style={{ width: "30%" }} />
              <Box>
                <Typography> {productCart.name}</Typography>
                <Typography> {productCart.price}</Typography>
                <Typography> {productCart.amount}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography> Subtotal</Typography>
          <Typography> {subtotalPrice} </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
