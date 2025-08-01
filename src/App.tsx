import { CRM } from './root/CRM';
import { radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { createTheme } from '@mui/material/styles';

// Vester colours
const spaceCadet = '#2B2D42';      // Primary
const vesterYellow = '#F3BA3C';    // Secondary
const vesterLightBlue = '#98DFEA'; // Dark theme primary
const vesterOffWhite = '#FDFBF8';  // Light theme background
const white = '#ffffff';
const black = '#000000';

// Custom Light Theme
const customLightTheme = createTheme({
  ...radiantLightTheme,
  palette: {
    mode: 'light',
    primary: {
      main: spaceCadet,
      contrastText: white,
    },
    secondary: {
      main: vesterYellow,
      contrastText: black,
    },
    background: {
      default: vesterOffWhite,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: spaceCadet,
          color: white,
          '&:hover': {
            backgroundColor: '#1E2134',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: vesterYellow,
          color: black,
        },
      },
    },
  },
});

// Custom Dark Theme
const customDarkTheme = createTheme({
  ...radiantDarkTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: vesterLightBlue,
      contrastText: spaceCadet,
    },
    secondary: {
      main: vesterYellow,
      contrastText: black,
    },
    background: {
      default: spaceCadet,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: vesterLightBlue,
          color: spaceCadet,
          '&:hover': {
            backgroundColor: '#80cad9',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: vesterYellow,
          color: black,
        },
      },
    },
  },
});

// Application wrapper
const App = () => (
  <CRM
    logo="./logos/vester_logo_white.svg"
    title="Elira"
    lightTheme={customLightTheme}
    darkTheme={customDarkTheme}
  />
);

export default App;