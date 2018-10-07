/*
 * @Author: Matheus Rezende
 * @Date: 2018-04-16 17:00:44
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-02 10:44:13
 */

import requestRestfulApi from './requestHelper'

export const createAction = (type, payload = {}, name = '', status = '') => ({
  type, payload, name, status,
})

export const createRequestAction = (type, api, config, args) => (dispatch) => requestRestfulApi(
  type,
  api,
  config,
  dispatch,
  args,
)
