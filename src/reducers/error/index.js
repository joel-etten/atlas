/*
 * @Author: Matheus Rezende
 * @Date: 2018-06-27 13:49:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-02 12:10:57
 */
import _ from 'lodash'
import {FAILURE, CLEAR_ERROR} from '../../constants/Actions';

export const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  const {
    type, name, status, exception,
  } = action
  if (type === CLEAR_ERROR) {
    return INITIAL_STATE
  }

  switch (status) {
    case FAILURE: {
      return {...state, [name]: exception}
    }

    default:
      return state
  }
}


/**
 * Takes state object and return error state based on actionType
 *
 * @param {Object} state
 * @param {String} actionType
 * @returns
 */
export const errorSelector = (state, actionType) => {
  if (!state || !_.isObject(state)) {
    throw new Error(`State type must be Object but got ${typeof state}`)
  }
  if (!actionType || !_.isString(actionType)) {
    throw new Error(`ActionType type must be String but got ${typeof actionType}`)
  }

  return !!state.error[actionType]
}

/**
 * Takes state object and return error state based on actionType
 *
 * @param {Object} state
 * @param {String} actionType
 * @returns
 */
export const errorObjectSelector = (state, actionType) => {
  if (!state || !_.isObject(state)) {
    throw new Error(`State type must be Object but got ${typeof state}`)
  }
  if (!actionType || !_.isString(actionType)) {
    throw new Error(`ActionType type must be String but got ${typeof actionType}`)
  }

  return state.error[actionType]
}

