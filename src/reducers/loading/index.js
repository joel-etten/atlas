/*
 * @Author: Matheus Rezende
 * @Date: 2018-06-27 12:48:39
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-02 12:53:10
 */
import _ from 'lodash'
import {LOADING, SUCCESS, FAILURE} from '../../constants/Actions';

export const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  const {name, status} = action
  switch (status) {
    case LOADING: {
      return {...state, [name]: true}
    }

    case SUCCESS: {
      return {...state, [name]: false}
    }
    case FAILURE: {
      return {...state, [name]: false}
    }

    default:
      return state
  }
}

/**
 * Takes state object and return loading state based on actionType
 *
 * @param {Object} state
 * @param {String} actionType
 * @returns {Boolean}
 */
export const loadingSelector = (state, actionType) => {
  if (!state || !_.isObject(state)) {
    throw new Error(`State type must be Object but got ${typeof state}`)
  }
  if (!actionType || !_.isString(actionType)) {
    throw new Error(`ActionType type must be String but got ${typeof actionType}`)
  }

  return !!state.loading[actionType]
}

