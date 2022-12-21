import * as React from 'react';
import { Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Button,
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

export const DashBoard = () => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);

  const { i18n } = useTranslation('layout');

  const toggleDrawer = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
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
          <Box>
            <Button
              sx={{ color: 'white' }}
              onClick={() => handleChangeLanguage('en')}
            >
              en
            </Button>
            <Button
              sx={{ color: 'white' }}
              onClick={() => handleChangeLanguage('ua')}
            >
              ua
            </Button>
          </Box>

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
