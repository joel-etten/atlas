import React from 'react'
import {Animated} from 'react-native'

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    moveUpAnim: new Animated.Value(10),
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 500,
          delay: this.props.delay,
        },
      ),
      Animated.timing(
        this.state.moveUpAnim,
        {
          toValue: 0,
          duration: 500,
          delay: this.props.delay,
        },
      ),
    ]).start()
  }

  render() {
    const {fadeAnim} = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          transform: [{translateY: this.state.moveUpAnim}],
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
