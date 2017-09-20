import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Go to notes
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "10%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: "black"
  },
});
