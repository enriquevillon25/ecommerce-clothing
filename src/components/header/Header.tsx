import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useDrawerContext } from "../../contexts/DrawerContext/DrawerCartContext";
export const Header = () => {
  const navItems = [
    { name: "Inicio", url: "/home" },
    { name: "Tienda", url: "/tienda" },
  ];
  const navigate = useNavigate();
  const { openDrawer } = useDrawerContext();
  return (
    <AppBar position="sticky">
      <Toolbar className="header-container">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aura Bonita
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              sx={{ color: "rgb(45, 52, 51)" }}
              onClick={() => navigate(item.url)}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={openDrawer}
        >
          <ShoppingBagIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
