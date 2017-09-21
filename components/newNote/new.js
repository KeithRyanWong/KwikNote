import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  TouchableOpacity
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "10%",
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: "black"
  },
});
