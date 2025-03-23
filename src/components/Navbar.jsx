import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6">Restaurant Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;