/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 08:30:44
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 08:31:23
 */
import React from 'react'
import {ScrollView, StyleSheet, View, StatusBar} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import TextInput from '../../../components/TextInput/TextInput';
import Colors from '../../../constants/Colors';
import {validateEmail} from '../../../helpers/validators';
import Layout from '../../../constants/Layout';
import Icon from '../../../components/ImageIcon/ImageIcon';
import {Button, Typography} from '../../../components';
import Spinner from '../../../components/Spinner/Spinner';


const SignupComponent = ({
  handleSubmit, goToLogin, loading, keyboardOn,
}) => (
  <ScrollView
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={StyleSheet.flatten([styles.container, styles.contentContainerStyle])}
  >
    <StatusBar barStyle='light-content' />
    {
      !keyboardOn && <Icon icon='logo' size={80} />
    }
    
    <View style={StyleSheet.flatten([styles.inputContainer, styles.paddingTop])}>
      <Field
        name='username'
        autoCapitalize='none'
        label='Username'
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='email'
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        label='Email'
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='password'
        label='Password'
        textContentType='password'
        secureTextEntry
        autoCapitalize='none'
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='confirmPassword'
        label='Confirm Password'
        textContentType='password'
        secureTextEntry
        autoCapitalize='none'
        errorIcon='warning'
        component={TextInput}
      />
      <View style={styles.buttonContainer}>
        <Typography textAlign='center' variant='caption'>
            Mit deiner Anmeldung stimmst du der Datenschutzerklärung und den AGB von MYMOXY zu.
        </Typography>


        <View style={styles.submitButton}>
          {
            loading ?
              <View style={styles.loading}>
                <Spinner />
              </View> :
              <Button label="Hier geht's lang..." gradient fullWidth onPress={handleSubmit} />

          }
        </View>
      </View>
    </View>
    <Button
      label='Bin schon dabei. einloggen'
      labelTypography='body'
      labelColor='white'
      fullWidth onPress={goToLogin}
    />
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Layout.spacing * 2,
  },
  contentContainerStyle: {
    alignItems: 'center',
    flex: 1,
  },
  paddingTop: {
    paddingTop: Layout.spacing * 7,
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: Layout.spacing * 4,
  },
  submitButton: {
    paddingTop: Layout.spacing * 2, width: '100%',
  },
  loading: {
    marginVertical: Layout.spacing,
  },
})


const validate = (values) => {
  const errors = {
    email: validateEmail(values.email),
  }

  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.password = 'Password does not match!'
    errors.confirmPassword = 'Password does not match!'
  }

  return errors
}


export default reduxForm({form: 'signup', validate})(SignupComponent)
