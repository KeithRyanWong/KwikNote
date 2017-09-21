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

    this.navigateToIndex = props.navigateToIndex;
    this.navigate = this.navigate.bind(this);
  }

  navigate(evt) {
    //determine which button pressed and pass in orderBy to function
    this.navigateToIndex();
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.navigate}>
          <Text>
            By Folder
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            By Last Updated
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Priority
          </Text>
        </TouchableOpacity>
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
