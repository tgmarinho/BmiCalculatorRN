import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Result from './pages/Result';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Result,
    },
    {
      initialRouteName: 'Main',
    }
  )
);

export default Routes;
