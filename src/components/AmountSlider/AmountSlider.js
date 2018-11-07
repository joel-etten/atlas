import React from 'react'
import {Slider, View, StyleSheet, Text} from 'react-native'


class AmountSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
    this.change = this.change.bind(this)
  }

  change(value) {
    this.setState(() => ({
      value: parseFloat(value),
    }));
  }

  render() {
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{String(value)}</Text>
        <Slider
          step={1}
          maximumValue={10}
          onValueChange={this.change}
          value={value}
          style={styles.slider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  slider: {
    marginLeft: '5%',
    width: '90%',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
})


export default AmountSlider
