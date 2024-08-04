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
export const Header = () => {
  const navItems = [
    { name: "Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar color="">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ropa para ti
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" }, mr: 12 }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              sx={{ color: "#fff" }}
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
          onClick={() => navigate("shopping-cart")}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => console.log("profile")}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
