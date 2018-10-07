/*
 * @Author: Matheus Rezende
 * @Date: 2018-04-16 17:03:41
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 14:32:04
 */

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../reducers'
import {crashReporter} from '../helpers/reducerErrorReportMiddleware';

const persistConfig = {
  key: 'mymoxy',
  storage,
  whitelist: ['auth', 'category', 'location'],
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const configureStore = (initialState) => {
  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(
    persistedReducer,
    initialState,
    enhancer(applyMiddleware(thunk, crashReporter)),
  )

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('../Reducers', () => {
        store.replaceReducer(reducer)
      })
    }
  }
  return store
}

const store = configureStore()

export default store
