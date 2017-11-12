import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { StackNavigator } from "react-navigation";

export default class FoundView extends Component {
  static navigationOptions = {
    title: "FoundView"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Found Screen</Text>
      </View>
    );
  }
}
