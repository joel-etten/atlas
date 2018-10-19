/*
 * @Author: Joel Etten
 * @Date: 2018-10-14 19:07:33
 * @Last Modified by: joel-etten
 * @Last Modified time: 2018-10-14 22:26:48
 */
import React from 'react'
import {View} from 'react-native'

import Header from './components/Header/Header.container'
import BalanceSummary from './components/BalanceSummary/BalanceSummary.container'
import StockList from './components/StockList/StockList.container'

const RootContainer = () => (
  <View>
    <Header />
  </View>
)

export default RootContainer
