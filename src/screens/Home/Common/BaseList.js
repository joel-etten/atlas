/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 18:18:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 08:42:05
 */
import React from 'react'
import {View, StyleSheet} from 'react-native'
import EventListLabelComponent from '../../../components/EventListLabel/EventListLabel.component';
import RenderHandler from './RenderHandler';
import Layout from '../../../constants/Layout';

export default ({
  label, onPress, hideAll, ...props
}) => (
  <React.Fragment>
    <EventListLabelComponent hideAll={hideAll} label={label} onPress={onPress} />
    <View style={styles.container}>
      <RenderHandler {...props} />
    </View>
  </React.Fragment>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: Layout.spacing,
    paddingBottom: Layout.spacing * 2,
  },
})
