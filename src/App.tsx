import { CRM } from './root/CRM';
import { radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { deepmerge } from '@mui/utils';

/**
 * Application entry point
 *
 * Customize Atomic CRM by passing props to the CRM component:
 *  - contactGender
 *  - companySectors
 *  - darkTheme
 *  - dealCategories
 *  - dealPipelineStatuses
 *  - dealStages
 *  - lightTheme
 *  - logo
 *  - noteStatuses
 *  - taskTypes
 *  - title
 * ... as well as all the props accepted by react-admin's <Admin> component.
 *
 * @example
 *
 * const App = () => (
 *   <CRM
 *       logo="./img/logo.png"
 *       title="Elira"
 *       lightTheme={radiantLightTheme}
 *       darkTheme={radiantDarkTheme}
 *    />
 * );
 */

// Custom theme with modified primary color
const customLightTheme = deepmerge(radiantLightTheme, {
  palette: {
    primary: {
      main: '#2B2D42', // Vester dark blue
    },
  },
});

const customDarkTheme = deepmerge(radiantDarkTheme, {
  palette: {
    primary: {
      main: '#98DFEA', // Vester light blue
    },
  },
});

const App = () => (
  <CRM
    logo="./img/vester_logo_white.png"
    title="Elira"
    lightTheme={customLightTheme}
    darkTheme={customDarkTheme}
  />
);

export default App;
