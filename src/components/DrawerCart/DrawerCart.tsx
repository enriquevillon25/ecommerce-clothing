import { Box, Drawer, Typography } from "@mui/material";

interface IDrawerCart {
  open: boolean;
  onClose: () => void;
}
export const DrawerCart = ({ open, onClose }: IDrawerCart) => {
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
          <img src="" alt="" />
        </Box>
      </Box>
    </Drawer>
  );
};
