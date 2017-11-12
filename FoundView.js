import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { StackNavigator } from "react-navigation";

export default class FoundView extends Component {
  static navigationOptions = {
    title: "FoundView"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Found Screen</Text>
        <Button 
          onPress={ () => navigate("Form") }
          title="Post New"
          color="#841584"
          accessibilityLabel="Post something new"
        />
      </View>
    );
  }
}
