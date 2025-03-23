import { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)} className="menu-button">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer variant="persistent" anchor="left" open={open} classes={{ paper: 'sidebar' }}>
        <Box p={2}>
          <Typography variant="h6" className="sidebar-title">Menu</Typography>
          <List>
            <ListItemButton>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
