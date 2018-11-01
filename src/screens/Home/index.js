import React from 'react'
import HomeContainer from './Home.container'
import IconButton from '../../components/IconButton/IconButton';
import BalanceSummary from '../../components/BalanceSummary/BalanceSummary.container';
import {normalize} from '../../helpers/normalize';
import Colors from '../../constants/Colors';

export default {
  screen: HomeContainer,
  navigationOptions: ({navigation}) => ({
    headerLeft: <IconButton icon='menu' onPress={navigation.openDrawer} size={normalize(30)} />,
    headerTitle: <BalanceSummary />,
    headerRight: <IconButton icon='add' size={normalize(20)} onPress={() => navigation.navigate('AddStock')} />,
    headerStyle: {
      backgroundColor: Colors.deepBlue,
      borderBottomWidth: 0,
      marginBottom: normalize(10),
      marginTop: normalize(10),
    },
    headerLeftContainerStyle: {
      marginLeft: normalize(20),
    },
    headerRightContainerStyle: {
      marginRight: normalize(20),
    },
  }),
}
