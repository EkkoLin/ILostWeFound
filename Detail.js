import React, { Component } from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

export default class Details extends Component {
  static navigationOptions = {
    title: "Details"
  };

  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}
