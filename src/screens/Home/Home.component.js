import React from 'react'
import {View, StyleSheet, Platform, ScrollView} from 'react-native'

import StockList from '../../components/StockList/StockList.container'
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const Home = ({stocks}) => (
  <View style={styles.root}>
    <ScrollView>
      <View
        style={styles.graphContainer}
      />
      <View style={styles.stockContainerStyle}>
        <StockList stocks={stocks} />
      </View>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  stockContainerStyle: {
    marginTop: Layout.window.height * 0.35,
  },
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  graphContainer: {
    backgroundColor: Colors.deepBlue,
    position: 'absolute',
    top: -90,
    right: 0,
    bottom: (Platform.OS === 'ios' ? '65%' : '55%'),
    left: 0,
  },
})

export default Home
