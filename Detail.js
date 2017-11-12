import React, { Component } from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

export default class Details extends Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor() {
      super();
  }

  render() {
    console.log(this.props.item);
    return (
      <View>
        <Text>{this.props.item}</Text>
      </View>
    );
  }
}
