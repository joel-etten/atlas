/*
 * @Author: Joel Etten
 * @Date: 2018-10-14 18:51:09
 * @Last Modified by: joel-etten
 * @Last Modified time: 2018-10-20 00:02:38
 */
import React from 'react'
import {View, StyleSheet} from 'react-native'

const Header = () => (
  <View
    style={styles.root}
  >
    Test
  </View>
)

const blue = '#050014'

const styles = StyleSheet.create({
  root: {
    backgroundColor: blue,
    height: 100,
    width: '100%',
  },
})

export default Header
