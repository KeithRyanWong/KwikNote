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

    this.state = {
      mode: "",
      touchStart: [],
      touchDirection: [],
      touchResponse: "Waiting",

      directionDisplay: "Hidden",
    };

    this.detectStart = this.detectStart.bind(this);
    this.handleTouchError = this.handleTouchError.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleSwipeRight = this.handleSwipeRight.bind(this);
    this.handleSwipeLeft = this.handleSwipeLeft.bind(this);
  }

  detectStart(evt) {
    this.showStart();

    const location = { 
      x: evt.nativeEvent.locationX,
      y: evt.nativeEvent.locationY
    };

    this.setState({
      touchResponse: `Touch started at ${location.x}, ${location.y}`,
      touchStart: location,
    });
  }
  handleTouchError(evt) {
    this.setState({
      touchResponse: "Something went wrong"
    });
  }

  handleSwipe(evt) {
    evt.nativeEvent.locationX
    this.setState({
      touchResponse: "I moved!"
    });
  }

  handleSwipeRight(evt) {

  }
  handleSwipeLeft(evt) {

  }

  render() {
    
    return (
      <View 
        style={styles.container}
        onStartShouldSetResponder={evt => true}
        onMoveShouldSetResponder={evt => true}
        onResponderGrant={this.detectStart}
        onResponderReject={this.handleTouchError}
        onResponderMove={this.handleSwipe}
        >
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
        <View 
          style={{

          }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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