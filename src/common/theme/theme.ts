import { createTheme, Theme } from "@mui/material";
import { orange, grey, green, teal } from "@mui/material/colors";

const lightTheme: Theme = createTheme(
{
  palette : {
    mode: "light",
    primary: {
      main: grey[800],
      contrastText: '#FFF',
    },
    secondary: {
      main: orange[500],
      contrastText: "#FFF",
    },
    success: {
      main: green[300],
      contrastText: grey[800],
    },
    info: {
      main: teal[100],
      contrastText: grey[800],
    },
    background: {
      default: "#F5F6F8",
    },
    error: {
      main: "#FF1B1C",
    },
}
  });

  export {lightTheme};