import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen016186Navigator from '../features/CopyOfBlankScreen016186/navigator';
import BlankScreen016185Navigator from '../features/BlankScreen016185/navigator';
import BlankScreen016182Navigator from '../features/BlankScreen016182/navigator';
import CopyOfBlankScreen016181Navigator from '../features/CopyOfBlankScreen016181/navigator';
import BlankScreen016162Navigator from '../features/BlankScreen016162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen016186: { screen: CopyOfBlankScreen016186Navigator },
BlankScreen016185: { screen: BlankScreen016185Navigator },
BlankScreen016182: { screen: BlankScreen016182Navigator },
CopyOfBlankScreen016181: { screen: CopyOfBlankScreen016181Navigator },
BlankScreen016162: { screen: BlankScreen016162Navigator },

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
