import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { StackNavigator } from "react-navigation";

export default class LostView extends Component {
  static navigationOptions = {
    title: "LostView"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Lost Screen</Text>
      </View>
    );
  }
}
