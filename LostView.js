import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Form from './Form';

export default class LostView extends Component {
  static navigationOptions = {
    title: "LostView"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Lost Screen</Text>
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

const Navigator = StackNavigator({
  Form: { screen: Form },
});