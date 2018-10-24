import React from 'react'
import {StyleSheet, View} from 'react-native'
import StockItem from '../StockItem/StockItem.container'

const StockList = ({stocks}) => (
  <View style={styles.root}>
    {
      stocks.map((stock) => <StockItem stock={stock} key={stock.name} />)
    }
  </View>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default StockList
