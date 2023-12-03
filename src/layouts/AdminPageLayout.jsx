import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Divider,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';

const AdminPageLayout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const sideMenuList = [
    {
      text: 'Create New Product',
    },
    {
      text: 'Manage Orders',
    },
    {
      text: 'Settings',
    },
    {
      text: 'Logout',
    },
  ];

  return (
    <>
      <AppBar position="static" color="info">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              MenuListProps={{
                sx: {
                  '& .MuiMenuItem-root': {
                    display: 'flex',
                    alignItems: 'center',
                    '& .MuiSvgIcon-root': {
                      marginRight: 10,
                    },
                  },
                },
              }}
            >
              {sideMenuList.map((item) => (
                <MenuItem key={item.text}>
                  <Typography variant="inherit">{item.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        anchor="left"
      >
        <Box sx={{ width: 256 }} role="presentation">
          <List>
            {sideMenuList.map((item) => (
              <ListItemButton key={item.text} onClick={handleDrawerToggle}>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: 1 }}>
            {/* Your admin page content goes here */}
            <Outlet/>
          </Box>
          <Box sx={{ flexGrow: 0, width: 256 }}>
            {/* Your menu bar goes here */}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AdminPageLayout;
