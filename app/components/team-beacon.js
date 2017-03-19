import React, { Component } from 'react';
import Screen from './screen';

export default class TeamBeacon extends Component {
  render() {
    return (
      // <Screen scenario="You are in the kitchen"/>
      <Screen scenario="There is a slippery floor ahead in 10 steps" case="slippery"/>
    );
  }
}
