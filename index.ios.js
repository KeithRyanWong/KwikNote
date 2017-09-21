import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigation from "./components/navigation";

export default class QuickNote extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

AppRegistry.registerComponent('QuickNote', () => QuickNote);
