import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class CardKitchen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require("../img/kitchen.png")}
          style={styles.img}
        />
        <Text>You are now in the kitchen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 350,
    height: 200,
    marginBottom: 25
  }
});