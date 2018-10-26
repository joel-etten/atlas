import React from 'react'
import {StyleSheet} from 'react-native'

import Typography from '../Typography/Typography'

import Colors from '../../constants/Colors'
import {calculateBalance} from '../../helpers/calculateBalance'


const BalanceSummary = ({stocks}) => (
  <Typography style={styles.root}>
    $ {calculateBalance(stocks)}
  </Typography>
)

const styles = StyleSheet.create({
  root: {
    fontSize: 30,
    color: Colors.white,
  },
})


export default BalanceSummary
