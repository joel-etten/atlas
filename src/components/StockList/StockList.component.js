import React from 'react'
import {View} from 'react-native'

import StockItem from '../StockItem/StockItem.container'


let delayCounter = 0

const StockList = ({stocks}) => (
  <View>
    {
      stocks.map((stock) => {
        delayCounter += 100
        return (
          <StockItem stock={stock} key={stock.name} delay={delayCounter} />
        )
      })
    }
  </View>
)


export default StockList
