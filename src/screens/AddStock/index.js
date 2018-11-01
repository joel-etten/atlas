import React from 'react'
import AddStockContainer from './AddStock.container'
import IconButton from '../../components/IconButton/IconButton';
import BalanceSummary from '../../components/BalanceSummary/BalanceSummary.container';
import {normalize} from '../../helpers/normalize';
import Colors from '../../constants/Colors';

export default {
  screen: AddStockContainer,
  navigationOptions: ({navigation}) => ({
    headerLeft: <IconButton icon='menu' onPress={navigation.openDrawer} size={normalize(30)} />,
    headerTitle: <BalanceSummary />,
    headerRight: <IconButton icon='close' size={normalize(17)} onPress={() => navigation.navigate('Home')} />,
    headerStyle: {
      backgroundColor: Colors.deepBlue,
      borderBottomWidth: 0,
      marginTop: normalize(10),
      marginBottom: normalize(10),
    },
    headerLeftContainerStyle: {
      marginLeft: normalize(20),
    },
    headerRightContainerStyle: {
      marginRight: normalize(20),
    },
  }),
}
