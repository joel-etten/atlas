import React from 'react'
import {Text} from 'react-native'

const Typography = ({
  children, ...props
}) => (
  <Text
    style={styles.root}
    {...props}
  >
    {children}
  </Text>
)

Typography.defaultProps = {
  variant: 'body',
  color: 'black',
}

const styles = {
  root: {
    fontFamily: 'OpenSans',
  },
}

export default Typography

