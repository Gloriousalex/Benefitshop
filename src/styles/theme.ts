import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { orange, grey, green, teal, red } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#19192B',
      white: '#fff',
    },
    primary: {
      main: grey[800],
      contrastText: '#FFF',
    },
    secondary: {
      main: orange[500],
      contrastText: '#FFF',
    },
    success: {
      main: green[300],
      contrastText: grey[800],
    },
    info: {
      main: teal[100],
      contrastText: grey[800],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#141414',
    },
    text: {
      primary: '#FFF',
      secondary: '#FFF',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica Neue',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1440,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
