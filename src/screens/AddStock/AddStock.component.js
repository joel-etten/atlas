import React from 'react'
import {View, StyleSheet} from 'react-native'
import {reduxForm, Field} from 'redux-form'

import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'

import Colors from '../../constants/Colors'
import {normalize} from '../../helpers/normalize'


const AddStock = () => (
  <View style={styles.root}>
    <View style={styles.inputsContainer}>
      <Field
        name='title'
        label='Titel'
        errorIcon='warning'
        placeholder='Stock Name'
        component={TextInput}
      />
      <Field
        name='title'
        label='Titel'
        errorIcon='warning'
        placeholder='Amount'
        component={TextInput}
      />
    </View>
    <Button
      gradientColors={Colors.blueButtonGradient}
      style={buttonStyles}
      gradient
      fullWidth
      label='Add'
    />
  </View>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: normalize(20),
    paddingTop: normalize(20),
  },
  inputsContainer: {
    width: '100%',
    marginLeft: '5%',
  },
})

const buttonStyles = {
  height: normalize(50),
  marginLeft: '5%',
  width: '90%',
}


export default reduxForm({
  form: 'addStock',
})(AddStock)
