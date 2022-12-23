import { theme } from 'styles/theme';
// eslint-disable-next-line import/named
import { Theme } from '@mui/material';
import { AppBar as MuiAppBar, Drawer as MuiDrawer } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderLink = styled(Link)(({ theme: Theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  fontSize: theme.typography.h2.fontSize,
  textDecoration: 'none',
  width: 'max-content',
}));

export const LeftPanelLink = styled(Link)(({ theme: Theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  fontsize: theme.typography.h3.fontSize,
  textDecoration: 'none',
}));

export const LanguageWrapper = styled('div')(() => ({
  marginRight: '5%',
}));

const drawerWidth: number = 240;

interface AppBarProps {
  open: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme: Theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme: Theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
