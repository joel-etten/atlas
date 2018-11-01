import React from 'react'
import {TextInput as Input, View} from 'react-native'

import Typography from '../Typography/Typography'

const TextInput = ({label}) => (
  <View>
    <Typography>{label}</Typography>
    <Input />
  </View>
)

export default TextInput
