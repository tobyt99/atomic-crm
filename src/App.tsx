import { CRM } from './root/CRM';
import { radiantLightTheme, radiantDarkTheme } from 'react-admin';

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
  const App = () => (
     <CRM
*        logo="./img/logo.png"
        title="Elira"
        lightTheme={radiantLightTheme}
        darkTheme={radiantDarkTheme}
     />
  );
 /
const App = () => <CRM />;

export default App;
