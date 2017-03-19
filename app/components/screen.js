import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CardKitchen from './card-kitchen';

export default class Screen extends Component {
  render() {
    return (
      <View>
        <CardKitchen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 15
  },
});