import React from 'react'
import IconButton from '../IconButton/IconButton';
import Layout from '../../constants/Layout';

export default ({onPress}) => (
  <IconButton
    icon='back'
    style={styles.headerButtonLeft}
    onPress={onPress}
  />
)
const styles = {
  headerButtonLeft: {
    marginLeft: Layout.spacing * 2,
  },
}
