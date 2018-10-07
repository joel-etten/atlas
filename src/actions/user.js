/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 10:48:26
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 09:07:48
 */
import * as ACTIONS from '../constants/Actions'
import {createRequestAction} from '../helpers/actionHelper';
import * as API from '../constants/ApiUrls';
import {routeReplacer} from '../helpers/queryStringHelper';

export const updateProfilePicture = (id, body) => createRequestAction(
  ACTIONS.UPDATE_PROFILE,
  routeReplacer(API.UPDATE_PROFILE_PICTURE, {id}),
  {method: 'PUT', body},
)


export const deleteUserAccount = (id) => createRequestAction(
  ACTIONS.DELETE_USER,
  routeReplacer(API.USER_DETAIL, {id}),
  {method: 'DELETE'},
)


export const changeUserPassword = (id, body) => createRequestAction(
  ACTIONS.CHANGE_PASSWORD,
  routeReplacer(API.CHANGE_PASSWORD, {id}),
  {method: 'PUT', body},
)
