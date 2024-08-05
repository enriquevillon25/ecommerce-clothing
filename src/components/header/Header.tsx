import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useDrawerContext } from "../../contexts/DrawerContext/DrawerCartContext";
export const Header = () => {
  const navItems = [
    { name: "Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  const navigate = useNavigate();
  const { openDrawer } = useDrawerContext();
  return (
    <AppBar position="static">
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
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
