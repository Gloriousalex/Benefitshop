import { useState } from 'react';
import { Outlet } from 'react-router';
import {
  Box,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material/';

import { MainListItems } from '../MainListItems';
import { AccountInfo } from '../AccountInfo';
import { ROUTES } from 'common/types/routes';
import { AppBar, Drawer, HeaderLink } from './styles';
import { LanguageMenu } from '../LanguageMenu';

export const DashBoard = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleDrawer = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute" open={sideBarOpen}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(sideBarOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <HeaderLink to={ROUTES.HOME}>Techfabric site</HeaderLink>
          </Typography>
          <LanguageMenu />

          <AccountInfo />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={sideBarOpen}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems
            toggleDrawer={toggleDrawer}
            isSideBarOpen={sideBarOpen}
          />
          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
