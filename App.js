import React, { Component } from "react";
import LostView from "./LostView";
import FoundView from "./FoundView";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Form from './Form';

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>I found your losts</Text>
        <Button
          onPress={() => navigate("LostView")}
          title="Lost"
          color="#841584"
          accessibilityLabel="What did you lost?"
        />
        <Button
          onPress={() => navigate("FoundView")}
          title="Found"
          color="#841584"
          accessibilityLabel="We can help you"
        />
      </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  LostView: { screen: LostView },
  FoundView: { screen: FoundView },
  Form : { screen: Form },
});

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
