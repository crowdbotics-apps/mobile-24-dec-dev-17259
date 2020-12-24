import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen016184Navigator from '../features/CopyOfCopyOfBlankScreen016184/navigator';
import BlankScreen016182Navigator from '../features/BlankScreen016182/navigator';
import CopyOfBlankScreen016181Navigator from '../features/CopyOfBlankScreen016181/navigator';
import BlankScreen016162Navigator from '../features/BlankScreen016162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen016184: { screen: CopyOfCopyOfBlankScreen016184Navigator },
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
