import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings160532Navigator from '../features/Settings160532/navigator';
import NotificationList160531Navigator from '../features/NotificationList160531/navigator';
import Maps160530Navigator from '../features/Maps160530/navigator';
import Settings160500Navigator from '../features/Settings160500/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings160532: { screen: Settings160532Navigator },
NotificationList160531: { screen: NotificationList160531Navigator },
Maps160530: { screen: Maps160530Navigator },
Settings160500: { screen: Settings160500Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
