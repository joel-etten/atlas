/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 15:45:40
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-11 06:49:37
 */
import React from 'react'
import {View} from 'react-native'
import IconButton from '../IconButton/IconButton';
import Layout from '../../constants/Layout';
import Spinner from '../Spinner/Spinner';

export default ({
  isFavorite, setFavorite, loading, disableSpacing,
}) => {
  if (loading) {
    return (
      <View style={!disableSpacing ? styles.container : {}}>
        <Spinner />
      </View>
    )
  }
  return (
    <View style={!disableSpacing ? styles.container : {}}>
      <IconButton onPress={setFavorite} icon={isFavorite ? 'favorited' : 'unfavorited'} />
    </View>
  )

}


const styles = {
  container: {
    marginRight: Layout.spacing * 2,
  },
}
