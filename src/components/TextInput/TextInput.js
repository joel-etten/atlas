import React from 'react'
import {TextInput as Input, View, StyleSheet} from 'react-native'

import Colors from '../../constants/Colors'
import {normalize} from '../../helpers/normalize'


const TextInput = ({placeholder}) => (
  <View style={styles.root}>
    <Input
      placeholder={placeholder}
      placeholderTextColor={Colors.grey}
      style={styles.input}
      autoCorrect={false}
    />
  </View>
)

const styles = StyleSheet.create({
  root: {
    borderColor: Colors.grey,
    borderRadius: normalize(10),
    borderStyle: 'solid',
    borderWidth: normalize(1),
    height: normalize(50),
    justifyContent: 'center',
    marginTop: normalize(10),
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    width: '90%',
  },
  input: {
    color: Colors.deepBlue,
    fontSize: normalize(20),
  },
})


export default TextInput
