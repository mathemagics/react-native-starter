import { TabNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';

const routeConfiguration = {
  login: { screen: LoginScreen },
};

const tabNavConfig = {
  tabBarPosition: 'bottom',
  initialRouteName: 'login',
  lazy: false,
};

export default TabNavigator(routeConfiguration, tabNavConfig);
