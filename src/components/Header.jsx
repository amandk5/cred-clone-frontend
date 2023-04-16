import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/cred-logo.png";
import "../App.css";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

const drawerWidth = 240;
const navItems = ["Home", "Products"];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // console.log(props);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // for routing
  const goTo = useNavigate();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "black",
        color: "white",
        // height: "100vh",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* logo here  */}
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 50, md: 50 },
            // maxWidth: { xs: 50, md: 50 },
          }}
          alt="logo"
          src={logo}
        />
        {/* end of logo  */}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {item === "Products" ? (
                <ListItemText
                  primary={item}
                  onClick={() => goTo("/products")}
                />
              ) : (
                item === "Home" && (
                  <ListItemText primary={item} onClick={() => goTo("/")} />
                )
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            bgcolor: "black",
            position: `${props.changePos === false ? "relative" : "fixed"}`,
          }}
        >
          <Toolbar className="header">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                // mr: 2,
                position: "absolute",
                // set the menu to right side
                right: "0",
                display: { sm: "none" },
                // width: 50,
                // height: 32,
                // border: "1px solid white",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                // display: "block",
                // { xs: "none", sm: "block" }
              }}
            >
              {/* logo here  */}
              <Link to="/">
                <Box
                  component="img"
                  sx={{
                    width: { xs: 40, md: 45 },
                    height: { xs: 53, md: 58 },
                    // maxHeight: { xs: 53, md: 53 },
                    // maxWidth: { xs: 40, md: 40 },
                  }}
                  alt="logo"
                  src={logo}
                />
              </Link>
              {/* end of logo  */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <>
                  {item === "Products" ? (
                    <Link to="/products">
                      <Button key={item} sx={{ color: "#fff" }}>
                        {item}
                      </Button>
                    </Link>
                  ) : (
                    item === "Home" && (
                      <Link to="/">
                        <Button key={item} sx={{ color: "#fff" }}>
                          {item}
                        </Button>
                      </Link>
                    )
                  )}
                </>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
