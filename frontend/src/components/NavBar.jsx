import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  Grid,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import HomeIcon from "@mui/icons-material/Home";
import { Outlet } from "react-router-dom";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setOpenDrawer(true);
  };
  const handleCategoryClick = () => {
    setOpen(!open);
  };

  const handleNavigationAboutUs = () => {
    navigate(`/aboutUs`);
    setOpenDrawer(false);
  };

  const handleContactUs = () => {
    navigate(`/contact`);
    setOpenDrawer(false);
  };

  const handleNavigationHomePage = () => {
    navigate(`/`);
    setOpenDrawer(false);
  };

  const handleNavigateCategory = (text) => {
    navigate(`/${text}`);
    setOpenDrawer(false);
  };

  const handleAdminClick = () => {
    navigate(`/admin`);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleNavigationHomePage}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleNavigationAboutUs}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleCategoryClick}>
            <ListItemIcon>
              <FlutterDashIcon />
            </ListItemIcon>
            <ListItemText primary={"Category"} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open}>
          <List>
            {["Dog", "Cats", "Birds"].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigateCategory(text.toLowerCase())}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ConnectWithoutContactIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} onClick={handleContactUs} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Grid>
      <AppBar position="static" sx={{ backgroundColor: "#b6cdbd" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              color="white"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ fontSize: 20 }}>Animal Gallery</Typography>
          </Grid>
          <Grid>
            <Button
              onClick={handleAdminClick}
              variant="outlined"
              color="success"
            >
              Admin
            </Button>{" "}
          </Grid>
          <Drawer
            sx={{ width: "60%" }}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Grid>
  );
}
export default NavBar;
