import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

import Nav from "./nav";
import SideSwiper from '../interface/side_swiper';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "",
      touchStart: [],
      x: 0,
      y: 0,
      left: -100,
      top: -100,
      touchDirection: [],
      touchResponse: "Waiting",

      directionDisplay: "none",
    };

    this.handleLeftSwipe = this.handleLeftSwipe.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  
  handleLeftSwipe() {
    this.setState({
      touchResponse: "Swiped left!"
    });
  }
  
  handleRightSwipe() {
    this.setState({
      touchResponse: "Swiped right!"
    });
  }

  handleCancel() {
    this.setState({
      touchResponse: "Cancelled!"
    });
  }


  render() {
    const { directionDisplay, touchStart } = this.state;

    return (
      <View
        style={styles.container}>
        <View
          style={styles.swipeArea}>
          <SideSwiper
            diameter={50}
            onLeftSwipe={this.handleLeftSwipe}
            onRightSwipe={this.handleRightSwipe}
            onCancel={this.handleCancel}/>
          <Text 
            style={styles.leftInstruction}>
            Swipe left and start speaking!
          </Text>
          <View style={testStyles.touchIndicator}>
            <Text style={testStyles.touchResponse}>
              {this.state.touchResponse}
            </Text>
          </View>
          <Text
            style={styles.rightInstruction}>
            Swipe right and start typing!
          </Text>

        </View>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 0,
    borderWidth: 1,
    borderColor: "black",
    height: "100%",
  },
  swipeArea: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%",
    height: "90%",
  },
  leftInstruction: {
    paddingRight: "20%",
  },
  rightInstruction: {
    paddingLeft: "20%",
  },
});

const testStyles = StyleSheet.create({  
  touchIndicator: {
    marginTop: 20,
    marginBottom: 20,
  },
  touchResponse: {
    color: "red",
    fontSize: 20,
  }
});