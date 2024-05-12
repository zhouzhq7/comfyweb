// src/Navigation.js
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Navigation = () => {
  const navigate = useNavigate();
  const items = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Workflows', icon: <WorkIcon />, path: '/' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {items.map((item, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navigation;
