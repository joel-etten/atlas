import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

import Typography from '../../components/Typography/Typography'
import ImageIcon from '../../components/ImageIcon/ImageIcon'

import Colors from '../../constants/Colors';
import {normalize} from '../../helpers/normalize';
import Icons from '../../constants/Icons'

const DrawerComponent = () => (
  <View style={styles.root}>
    <View style={styles.content}>
      <Image source={Icons.logo} style={styles.logo} />
      <View style={styles.buttons}>
        <View style={styles.topButtons}>
          <ImageIcon icon='add' />
          <Typography style={styles.addStockText}>Add Stock</Typography>
        </View>
        <View>
          <View style={styles.extraInfo}>
            <Typography style={styles.extraInfoButton}>Help</Typography>
            <Typography style={styles.extraInfoButton}>Contact</Typography>
            <Typography style={styles.extraInfoButton}>Terms of Service</Typography>
          </View>
          <Typography style={styles.clearDataButtonText}>Clear Data</Typography>
        </View>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  root: {
    paddingTop: normalize(25),
    flex: 1,
    backgroundColor: Colors.deepBlue,
  },
  content: {
    marginTop: normalize(10),
    padding: normalize(20),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: normalize(60),
    paddingTop: normalize(40),
  },
  logo: {
    height: normalize(25),
    width: normalize(100),
  },
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addStockText: {
    color: Colors.white,
    fontSize: normalize(20),
    marginLeft: normalize(10),
  },
  extraInfo: {
    marginBottom: normalize(20),
  },
  extraInfoButton: {
    color: Colors.white,
    marginTop: normalize(2),
    marginBottom: normalize(2),
  },
  clearDataButtonText: {
    color: Colors.red,
  },
})

export default DrawerComponent
