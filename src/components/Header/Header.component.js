/*
 * @Author: Joel Etten
 * @Date: 2018-10-14 18:51:09
 * @Last Modified by: joel-etten
 * @Last Modified time: 2018-10-20 00:02:38
 */
import React from 'react'
import {View, StyleSheet} from 'react-native'

import IconButton from '../IconButton/IconButton'
import BalanceSummary from '../BalanceSummary/BalanceSummary.container'

import Colors from '../../constants/Colors'

const Header = () => (
  <View style={styles.root}>
    <IconButton icon='menu' size={40} />
    <BalanceSummary />
  </View>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.deepBlue,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export default Header
