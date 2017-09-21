import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  TouchableOpacity
} from 'react-native';

import Main from "./main/main";
import Index from "./index/index";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "main"
    };

    this.renderView = this.renderView.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
  }

  navigateToIndex(orderBy) {
    this.setState({
      currentView: "index"
    });
  }

  renderView() {
    switch(this.state.currentView) {
      case "main":
        return <Main
                  navigateToIndex={this.navigateToIndex}/>;
      case "index":
        return <Index/>;
      default:
        return <Text>Error</Text>;
    }
  }

  render() {
    return this.renderView();
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
