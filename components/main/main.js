import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

import Nav from "./nav";

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

    this.detectStart = this.detectStart.bind(this);
    this.handleTouchError = this.handleTouchError.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeFinish = this.handleSwipeFinish.bind(this);
  }

  detectStart({ nativeEvent }) {
    this.showStart();

    const x = nativeEvent.pageX;
    const y = nativeEvent.pageY;

    const location = { 
      x,
      y,
    };

    this.setState({
      touchResponse: `Touch started at ${location.x}, ${location.y}`,
      touchStart: location,
      directionDisplay: "flex",
      x,
      y,
    });
  }
  
  showStart() {

  }

  handleTouchError(evt) {
    this.setState({
      touchResponse: "Something went wrong"
    });
  }

  handleSwipeMove({ nativeEvent }) {
    const x = nativeEvent.pageX;
    const y = nativeEvent.pageY;
    this.setState({
      x,
      y
    });
  }

  handleSwipeFinish({ nativeEvent }) {
    const x = nativeEvent.pageX;
    const y = nativeEvent.pageY;
    let touchResponse;
    let { touchStart } = this.state;

    if(x < touchStart.x - 25) {
      touchResponse = "Swiped left!";
      // this.openVoiceRecorder();
    } else if (x > touchStart.x + 25) {
      touchResponse = "Swiped right!";
      // this.openTextEditor();
    } else {
      touchResponse = "Cancelled!";
    }

    this.setState({
      directionDisplay: "none",
      x,
      y,
      touchResponse,
    });
  } 

  render() {
    const { directionDisplay, touchStart } = this.state;

    return (
      <View
        style={styles.container}>
        <View 
          style={styles.swipeArea}
          onStartShouldSetResponder={evt => true}
          onMoveShouldSetResponder={evt => true}
          onResponderGrant={this.detectStart}
          onResponderReject={this.handleTouchError}
          onResponderMove={this.handleSwipeMove}
          onResponderRelease={this.handleSwipeFinish}>

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


          {/* --------Direction indicator---------- */}
          <View 
            style={{
              position: "absolute",
              display: directionDisplay,
              width: 50,
              height: 50,
              left: touchStart.x - 25,
              top: touchStart.y - 25,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "black",
            }}>
          </View>
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