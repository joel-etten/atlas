import React from 'react'
import {View, ImageBackground} from 'react-native'
import Colors from '../../constants/Colors';
import BackgroundImage from '../../assets/images/background.jpg'
import DrawerRow from '../DrawerRow/DrawerRow.component';
import Layout from '../../constants/Layout';

const Drawer = ({navigate, logout}) => (
  <View style={styles.container}>
    <ImageBackground source={BackgroundImage} style={styles.image} blurRadius={100} resizeMode='cover'>
      <View style={styles.contentContainer}>
        <View style={styles.itemsColumn}>
          <DrawerRow active label='Home' icon='home' onPress={navigate('Home')} />
          <DrawerRow label='Map' icon='drawerMap' onPress={navigate('Map')} />
          <DrawerRow label='Favorites' icon='heartWhite' onPress={navigate('Favorites')} />
          <DrawerRow label='My Events' icon='calendarWhiteDrawer' onPress={navigate('MyEvents')} />
          <DrawerRow label='Profile' icon='profile' onPress={navigate('Profile')} />
        </View>
        <View style={styles.itemsColumn}>
          
          <DrawerRow label='Einstellungen' icon='info' onPress={navigate('Info')} />
          <DrawerRow label='Logout' icon='logout' onPress={logout} />
        </View>
      </View>
    </ImageBackground>
  </View>
)
export default Drawer

const styles = {
  image: {
    width: '100%',
    height: '100%',
  },
  itemsColumn: {
    width: '100%',
  },
  contentContainer: {
    paddingVertical: Layout.spacing * 8,
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1, backgroundColor: Colors.background,
  },
}
