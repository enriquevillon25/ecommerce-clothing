import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar color="">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
