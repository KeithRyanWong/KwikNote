import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from "./components/main/main";

export default class QuickNote extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('QuickNote', () => QuickNote);
