import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings160617Navigator from '../features/Settings160617/navigator';
import UserProfile160615Navigator from '../features/UserProfile160615/navigator';
import UserProfile160591Navigator from '../features/UserProfile160591/navigator';
import Maps160572Navigator from '../features/Maps160572/navigator';
import Settings160549Navigator from '../features/Settings160549/navigator';
import Settings160532Navigator from '../features/Settings160532/navigator';
import NotificationList160531Navigator from '../features/NotificationList160531/navigator';
import Maps160530Navigator from '../features/Maps160530/navigator';
import Settings160500Navigator from '../features/Settings160500/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings160617: { screen: Settings160617Navigator },
UserProfile160615: { screen: UserProfile160615Navigator },
UserProfile160591: { screen: UserProfile160591Navigator },
Maps160572: { screen: Maps160572Navigator },
Settings160549: { screen: Settings160549Navigator },
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
