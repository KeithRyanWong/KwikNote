import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import SideSwiper from "../interface/side_swiper";


export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
      left: 0,
    };

    //navigation
    this.navigateToNewNote = props.navigateToNewNote;

    this.dimDisplay = this.dimDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
    this.handleLeftSwipe = this.handleLeftSwipe.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  dimDisplay() {
    this.setState({
      opacity: 0.3
    });
  }

  resetDisplay() {
    this.setState({
      opacity: 0,
      left: 0,
    });
  }

  handleRightSwipe() {
    this.navigateToNewNote("text");
  }

  handleLeftSwipe() {
    this.navigateToNewNote("audio");
  }

  handleSwipe(touchStart, currentLocation) {
    this.setState({
      left: currentLocation.x - touchStart.x,
    });
  }

  render() {
    const { opacity, left } = this.state;

    return (
      <View style={styles.container}>
        <View style={userInterface.textEdit}>
          <Text>
            Text
          </Text>
        </View>
        <View style={userInterface.microphone}>
          <Text>
            Mic
          </Text>
        </View>
        <View style={[userInterface.container, { left }]}>
          <SideSwiper
            diameter={50}
            hide={true}
            onStart={this.dimDisplay}
            onSwipe={this.handleSwipe}
            onLeftSwipe={this.dimDisplay}
            onRightSwipe={this.handleRightSwipe}
            onCancel={this.resetDisplay}/>
            <Text>
              Swipe for new Note
            </Text>
        </View>

        <View style={styles.listContainer}>
          <Text>
            Recorded notes will be here
          </Text>
        </View>

        <View style={[userInterface.container, { bottom: 0 }]}>
          <Text>
            options for sorting will be here
          </Text>
        </View>

        <View style={[styles.overlay, { opacity }]}>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    top: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%",
    height: (height - 20),
    borderWidth: 1,
    borderColor: "black",
  },
  listContainer: {
    height: "80%",
  },
  overlay: {
    position: "absolute",
    top: "10%",
    width: "100%",
    height: "90%",
    backgroundColor: "black",
  }
});

const userInterface = StyleSheet.create({
  container: {
    // position: "absolute",
    height: "10%",
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  textEdit: {
    position: "absolute",
    height: "10%",
    width: "50%",
    left: 0,
    backgroundColor: "blue",
  },
  microphone: {
    position: "absolute",
    height: "10%",
    width: "50%",
    right: 0,
    backgroundColor: "green",
  },

});