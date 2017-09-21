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
      touchDirection: "",
      touchResponse: "Waiting",
      opacity: 0,

      directionDisplay: "none",
    };

    this.handleLeftSwipe = this.handleLeftSwipe.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }


  
  handleLeftSwipe() {
    this.setState({
      opacity: 0,
      touchResponse: "Swiped left!"
    });
  }
  
  handleRightSwipe() {
    this.setState({
      opacity: 0,
      touchResponse: "Swiped right!"
    });
  }

  handleCancel() {
    this.setState({
      opacity: 0,
      touchResponse: "Cancelled!"
    });
  }

  handleMove(startLocation, currentLocation) {
    const opacity = 0.007 * Math.abs(currentLocation.x - startLocation.x);
    let direction;

    if(currentLocation.x - startLocation.x > 0) {
      direction = "right";
    } else if(currentLocation.x - startLocation.x < 0) {
      direction = "left";
    } else {
      direction = "neutral";
    }
    
    this.setState({
      opacity,
      direction,
    });
  }


  render() {
    const { directionDisplay, touchStart, opacity, direction } = this.state;

    return (
      <View
        style={styles.container}>
        {/* ---------- Swipe UI ----------- */}
        <View
          style={styles.swipeArea}>

          <View
          style={[styles.overlay, { opacity }]}>
          </View>

          <SideSwiper
            diameter={50}
            onLeftSwipe={this.handleLeftSwipe}
            onRightSwipe={this.handleRightSwipe}
            onCancel={this.handleCancel}
            onSwipe={this.handleMove}/>
          {/* ------------ Static Content ------------ */}
          <View
            style={styles.default}>
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
          {/* ------------ END Static Content ----------- */}
          {/* ------------ Overlays ----------- */}
          <View 
            style={[
              overlays.microphone, 
              { opacity: direction === "left" ? opacity : 0}
              ]}>
            <Text>
              Microphone
            </Text>
          </View>
          <View 
            style={[
              overlays.textedit, 
              { opacity: direction === "right" ? opacity : 0}
              ]}>
            <Text>
              Text Icon
            </Text>
          </View>
          {/* ------------ END Overlays ----------- */}
        </View>
        {/* ------------ END Swipe UI ----------- */}

        {/* ------------ Navigator ----------- */}
        <Nav/>
        {/* ---------- END Navigator --------- */}
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
    // borderWidth: 1,
    // borderColor: "black",
    height: "100%",
  },
  swipeArea: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%",
    height: "90%",
  },
  default: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  overlay: {
    position: "absolute",
    backgroundColor: '#000000',
    width: "100%",
    height: "90%",
  },
  leftInstruction: {
  },
  rightInstruction: {
  },
});

const overlays= StyleSheet.create({
  textedit: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
  },
  microphone: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: "100%",
    width: "100%",
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