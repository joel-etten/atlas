import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

import Typography from '../Typography/Typography'
import FadeInView from '../FadeInView/FadeInView'

import Colors from '../../constants/Colors'


const StockItem = ({stock, delay}) => (
  <FadeInView style={rootStyles} delay={delay}>
    <View>
      <View style={styles.topContainer}>
        <Typography style={styles.header}>{stock.shortName}</Typography>
        <Typography style={styles.amount}>x {stock.amount}</Typography>
      </View>
      <Text style={styles.subheader}>{stock.name}</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text
        style={stock.type === 'positive' ? styles.percentageChangePositive : styles.percentageChangeNegative}
      >{stock.percentageChange}%
      </Text>
      <Text style={styles.currentPrice}>{stock.currentPrice}</Text>
    </View>
  </FadeInView>
)

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  header: {
    fontSize: 40,
  },
  amount: {
    marginLeft: 20,
    fontFamily: 'OpenSans-medium',
  },
  subheader: {
    fontSize: 20,
    color: Colors.deepGrey,
  },
  percentageChangePositive: {
    fontFamily: 'OpenSans-medium',
    fontSize: 24,
    color: Colors.green,
  },
  percentageChangeNegative: {
    fontFamily: 'OpenSans-medium',
    fontSize: 24,
    color: Colors.red,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  currentPrice: {
    fontFamily: 'OpenSans-medium',
  },
})

const rootStyles = {
  height: 100,
  borderRadius: 10,
  marginLeft: 25,
  marginRight: 25,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: Colors.white,
  shadowColor: Colors.grey,
  shadowOpacity: 0.5,
  shadowRadius: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
}


export default StockItem
