import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {LinearGradient} from 'expo'

import Typography from '../Typography/Typography';

import Colors from '../../constants/Colors';
import {normalize} from '../../helpers/normalize'

const Button = ({
  label,
  onPress,
  style,
  fullWidth,
  gradient,
  gradientColors,
  ...props
}) => (
  <TouchableOpacity {...props} onPress={onPress} style={fullWidth && styles.fullWidth} >
    {
      gradient ? (
        <LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={gradientColors} style={{...styles.button, ...style}}>
          <Typography style={styles.text}>{label}</Typography>
        </LinearGradient>
      ) : (
        <View style={{...styles.button, ...style}}>
          <Typography style={styles.text}>{label}</Typography>
        </View>
      )
    }
  </TouchableOpacity>
)

const styles = {
  button: {
    width: '100%',
    borderRadius: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontSize: normalize(20),
  },
}


export default Button
