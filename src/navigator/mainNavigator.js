import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings160678Navigator from '../features/Settings160678/navigator';
import NotificationList160677Navigator from '../features/NotificationList160677/navigator';
import Maps160675Navigator from '../features/Maps160675/navigator';
import UserProfile160655Navigator from '../features/UserProfile160655/navigator';
import Tutorial160654Navigator from '../features/Tutorial160654/navigator';
import NotificationList160626Navigator from '../features/NotificationList160626/navigator';
import Settings160625Navigator from '../features/Settings160625/navigator';
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
Settings160678: { screen: Settings160678Navigator },
NotificationList160677: { screen: NotificationList160677Navigator },
Maps160675: { screen: Maps160675Navigator },
UserProfile160655: { screen: UserProfile160655Navigator },
Tutorial160654: { screen: Tutorial160654Navigator },
NotificationList160626: { screen: NotificationList160626Navigator },
Settings160625: { screen: Settings160625Navigator },
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
