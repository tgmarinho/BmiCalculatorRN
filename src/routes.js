import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Results from './pages/Results';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Results,
    },
    {
      initialRouteName: 'Main',
    }
  )
);

export default Routes;
