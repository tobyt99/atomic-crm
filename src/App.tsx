import { CRM } from './root/CRM';
import { radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { createTheme } from '@mui/material/styles';

const spaceCadet = '#2B2D42';
const vesterYellow = '#F3BA3C';
const vesterLightBlue = '#98DFEA';
const vesterOffWhite = '#FDFBF8';
const white = '#ffffff';
const black = '#000000';

// Shared typography
const vesterTypography = {
    fontFamily: 'Inter, sans-serif',
    h1: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
    },
    h2: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
    },
    h3: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
    },
    h4: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
    },
    h5: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
    },
    h6: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
    },
    body1: {
        fontFamily: 'Inter, sans-serif',
    },
    body2: {
        fontFamily: 'Inter, sans-serif',
    },
    subtitle1: {
        fontFamily: 'Inter, sans-serif',
    },
    subtitle2: {
        fontFamily: 'Inter, sans-serif',
    },
    button: {
        fontFamily: 'Inter, sans-serif',
        textTransform: 'none' as const,
    },
};

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
    typography: vesterTypography,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
                margin: 'normal',
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: '0.875rem',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: 4,
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
    typography: vesterTypography,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
                margin: 'normal',
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: '0.875rem',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: 4,
                },
            },
        },
    },
});

const App = () => (
    <CRM
        logo="./logos/vester_logo_white.svg"
        title="Elira"
        lightTheme={customLightTheme}
        darkTheme={customDarkTheme}
    />
);

export default App;
