/*
 * @Author: Joel Etten
 * @Date: 2018-10-14 18:51:09
 * @Last Modified by: joel-etten
 * @Last Modified time: 2018-10-20 00:02:38
 */
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {deepBlue} from '../../constants/Colors'

const Header = () => (
  <View
    style={styles.root}
  >
    <Text style={styles.text}>Header</Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: deepBlue,
    height: 100,
    width: '100%',
  },
})

export default Header
