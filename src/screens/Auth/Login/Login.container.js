/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-01 08:15:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 07:00:50
 */
import {compose, withHandlers} from 'recompose';
import {SubmissionError} from 'redux-form'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import LoginComponent from './Login.component'
import * as AUTH_ACTIONS from '../../../actions/auth';
import {errorSelector} from '../../../reducers/error';
import {AUTHENTICATE} from '../../../constants/Actions';
import {loadingSelector} from '../../../reducers/loading';
import {saveToStorage} from '../../../helpers/storageHelper';
import {AUTH} from '../../../constants/StorageKeys';
import withKeyboardStatus from '../../../hocs/withKeyboardStatus';


const mapStateToProps = (state) => ({
  error: errorSelector(state, AUTHENTICATE),
  loading: loadingSelector(state, AUTHENTICATE),
})

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(AUTH_ACTIONS.login, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit: ({login, navigation}) => (value) => login(value)
      .then((response) => {
        saveToStorage(AUTH, response)
        navigation.navigate('App')
      })
      .catch(() => {
        const errors = {
          email: 'Wrong Credentials!',
          password: 'Wrong Credentials!',
        }
        throw new SubmissionError(errors)
      }),
    goToSignup: ({navigation}) => () => {
      navigation.navigate('Signup')
    },
    goToRecoverPassword: ({navigation}) => () => {
      navigation.navigate('RecoverPassword')
    },
  }),
  withKeyboardStatus,
)(LoginComponent)
