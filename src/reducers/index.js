/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 14:35:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 09:20:28
 */
import {combineReducers} from 'redux'
import {reducer as reduxFormReducer} from 'redux-form'
import error from './error'
import loading from './loading'
import user from './user'
import event from './event'
import location from './location'
import category from './category'
import {SIGNOUT} from '../constants/Actions';

const appReducer = combineReducers({
  user,
  form: reduxFormReducer,
  error,
  loading,
  event,
  location,
  category,
})


export default (state, action) => {
  if (action.type === SIGNOUT) {
    state = {location: state.location} //eslint-disable-line
  }
  
  return appReducer(state, action)
}
