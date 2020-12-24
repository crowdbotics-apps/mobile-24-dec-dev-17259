import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen416187Navigator from '../features/BlankScreen416187/navigator';
import CopyOfBlankScreen016186Navigator from '../features/CopyOfBlankScreen016186/navigator';
import BlankScreen016185Navigator from '../features/BlankScreen016185/navigator';
import BlankScreen016182Navigator from '../features/BlankScreen016182/navigator';
import BlankScreen016162Navigator from '../features/BlankScreen016162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen416187: { screen: BlankScreen416187Navigator },
CopyOfBlankScreen016186: { screen: CopyOfBlankScreen016186Navigator },
BlankScreen016185: { screen: BlankScreen016185Navigator },
BlankScreen016182: { screen: BlankScreen016182Navigator },
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
