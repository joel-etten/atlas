import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Colors from '../../constants/Colors'
import Typography from '../Typography/Typography'

const StockItem = ({stock}) => (
  <View style={styles.root}>
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
  </View>
)

const styles = StyleSheet.create({
  root: {
    height: 100,
    borderRadius: 10,
    margin: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.grey,
    shadowOpacity: 1.0,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
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

export default StockItem
