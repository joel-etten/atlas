/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-01 18:16:51
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-08 21:21:48
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Image} from 'react-native'
import Icons from '../../constants/Icons'

const Icon = ({
  icon, ...props
}) => (
  <Image
    {...props}
    source={Icons[icon]}
    fadeDuration={0}
  />
)

Icon.defaultProps = {
  size: 20,
}

Icon.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Icon
