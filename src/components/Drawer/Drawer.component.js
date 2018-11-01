import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Colors from '../../constants/Colors';
import {normalize} from '../../helpers/normalize';

const DrawerComponent = () => (
  <View style={styles.root}>
    <Text style={styles.text}>whats up bitches</Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    paddingTop: normalize(25),
    flex: 1,
    backgroundColor: Colors.deepBlue,
  },
  text: {
    color: Colors.white,
  },
})

export default DrawerComponent
