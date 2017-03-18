/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Card } from 'react-native-material-design';

export default class teambeacon extends Component {
  render() {
    return (
      <View>
          <Card>
            <Card.Body>
              <Text>You have found Beacon 1</Text>
            </Card.Body>
            <Card.Actions position="right">
              <Button value="Acknowledge" />
            </Card.Actions>
        </Card>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('teambeacon', () => teambeacon);
