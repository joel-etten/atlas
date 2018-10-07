/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 19:09:27
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-20 07:53:36
 */
import React from 'react'
import {RefreshControl, ScrollView, View} from 'react-native';
import CategoriesPickerContainer from '../../components/CategoriesPicker/CategoriesPicker.container';
import Colors from '../../constants/Colors';
import IconButton from '../../components/IconButton/IconButton';
import Layout from '../../constants/Layout';
import NearEventsContainer from './NearEvents/NearEvents.container';
import UpcomingEventsContainer from './UpcomingEvents/UpcomingEvents.container';


const HomeComponent = ({onActionButtonPress, onRefresh, loading}) => (
  <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={loading} />}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <UpcomingEventsContainer />
      <NearEventsContainer />
      <CategoriesPickerContainer />
    </ScrollView>
    <View style={styles.actionButton}>
      <IconButton icon='plusOval' onPress={onActionButtonPress} />
    </View>
  </View>
)

const styles = {
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: Layout.spacing * 2.5,
    paddingTop: Layout.spacing * 2.5,
    flex: 1,
  },
  actionButton: {
    position: 'absolute',
    zIndex: 300,
    right: Layout.spacing * 4,
    bottom: Layout.spacing * 6,
  },
  

}

export default HomeComponent
