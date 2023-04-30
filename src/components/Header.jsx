import React, { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Manage Books",
    path: "/manage",
    auth: true,
  },
  {
    name: "Favorites",
    path: "/favorite"
  },
];

export function Header() {
  const { user, logout } = useAuthContext();

  const navigate = useNavigate();

  console.log(user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar 
    position="static" 
    className="appBarBg" 
    elevation={10}>
   
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <BookmarksOutlinedIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: 'PT Sans Narrow',
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LiNova Library
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* sortam cu filter- sunt logat sau nu */}
              {pages
                .filter((page) => (page.auth ? Boolean(user) : true))
                .map((page) => (
                  <MenuItem
                    component={NavLink}
                    to={page.path}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "black",
                      "&.active": {
                        "& p": {
                          color: "text.primary",
                          fontWeight: "bold",
                        },
                        backgroundColor: "action.selected",
                      },
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <BookmarksOutlinedIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: 'PT Sans Narrow',
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
             LiNova Library
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter((page) => (page.auth ? Boolean(user) : true))
              .map((page) => (
                <Button
                  key={page.name}
                  LinkComponent={NavLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    "&.active": {
                      color: "text.primary",
                      fontWeight: "bold",
                      backgroundColor: "action.selected",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar className="avatarBg">
                    {user.firstName[0]}
                  </Avatar>
                ) : (
                  <Avatar className="avatarBg"/>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <MenuItem
                  onClick={() => {
                    logout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}

              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}