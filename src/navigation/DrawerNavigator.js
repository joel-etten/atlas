/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 12:53:17
 * @Last Modified by: joel.etten
 * @Last Modified time: 2018-11-01 10:15:19
 */
import {createDrawerNavigator} from 'react-navigation'
import {normalize} from '../helpers/normalize';
import DrawerComponent from '../components/Drawer/Drawer.component';
import RootNavigator from './RootNavigator';

export default createDrawerNavigator({
  Home: {
    screen: RootNavigator,
  },
}, {
  drawerWidth: normalize(230),
  contentComponent: DrawerComponent,
})
