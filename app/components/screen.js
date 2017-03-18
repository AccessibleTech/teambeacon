import React, { Component } from 'react';
import { Button, Card } from 'react-native-material-design';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Screen extends Component {
  render() {
    return (
      <View>
        <Card>
          <Card.Body>
            <Text style={styles.welcome}>Welcome to Team Beacon - Screen one</Text>
            <Text style={styles.instructions}>{this.props.scenario}</Text>
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
    marginTop: 15
  },
});