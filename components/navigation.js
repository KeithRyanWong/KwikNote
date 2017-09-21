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
    this.navigateToNewNote = this.navigateToNewNote.bind(this);
  }

  navigateToIndex(orderBy) {
    this.setState({
      currentView: "index"
    });
  }

  navigateToNewNote(mode) {
    this.setState({
      currentView: "newNote"
    });
  }

  renderView() {
    switch(this.state.currentView) {
      case "main":
        return <Main
                  navigateToIndex={this.navigateToIndex}
                  navigateToNewNote={this.navigateToNewNote}/>;
      case "index":
        return <Index
                  navigateToNewNote={this.navigateToNewNote}/>;
      case "newNote":
        return <Main
                  navigateToIndex={this.navigateToIndex}
                  navigateToNewNote={this.navigateToNewNote}/>;
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
