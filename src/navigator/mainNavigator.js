import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen016197Navigator from '../features/BlankScreen016197/navigator';
import CopyOfBlankScreen016196Navigator from '../features/CopyOfBlankScreen016196/navigator';
import BlankScreen016195Navigator from '../features/BlankScreen016195/navigator';
import CopyOfCopyOfBlankScreen016194Navigator from '../features/CopyOfCopyOfBlankScreen016194/navigator';
import CopyOfBlankScreen016193Navigator from '../features/CopyOfBlankScreen016193/navigator';
import CopyOfBlankScreen016191Navigator from '../features/CopyOfBlankScreen016191/navigator';
import CopyOfCopyOfBlankScreen016188Navigator from '../features/CopyOfCopyOfBlankScreen016188/navigator';
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
BlankScreen016197: { screen: BlankScreen016197Navigator },
CopyOfBlankScreen016196: { screen: CopyOfBlankScreen016196Navigator },
BlankScreen016195: { screen: BlankScreen016195Navigator },
CopyOfCopyOfBlankScreen016194: { screen: CopyOfCopyOfBlankScreen016194Navigator },
CopyOfBlankScreen016193: { screen: CopyOfBlankScreen016193Navigator },
CopyOfBlankScreen016191: { screen: CopyOfBlankScreen016191Navigator },
CopyOfCopyOfBlankScreen016188: { screen: CopyOfCopyOfBlankScreen016188Navigator },
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
