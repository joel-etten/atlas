/*
 * @Author: Joel Etten
 * @Date: 2018-10-14 19:07:33
 * @Last Modified by: joel.etten
 * @Last Modified time: 2018-10-20 00:15:47
 */
import React from 'react'
import {StyleSheet, View, StatusBar} from 'react-native'

import StockList from './components/StockList/StockList.container'
import Header from './components/Header/Header.container'

const mockData = {
  stocks: [
    {
      name: 'Adyen NV',
      shortName: 'ADYEN',
      amount: 4,
      currentPrice: 656.80,
      percentageChange: 2.4,
      type: 'negative',
    },
    {
      name: 'Apple Inc.',
      shortName: 'APPL',
      amount: 1,
      currentPrice: 45.29,
      percentageChange: 17.2,
      type: 'positive',
    },
    {
      name: 'Tesla Inc',
      shortName: 'TSLA',
      amount: 2,
      currentPrice: 56.80,
      percentageChange: 2.4,
      type: 'negative',
    },
  ],
}

const RootContainer = () => (
  <View style={styles.root}>
    <StatusBar barStyle='dark-content' />
    <Header />
    <StockList stocks={mockData.stocks} />
  </View>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default RootContainer
