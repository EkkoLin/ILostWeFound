import React, { Component } from "react";
import LostView from "./LostView";
import FoundView from "./FoundView";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import Form from "./Form";
import Details from "./Detail";
import { Button } from "react-native-elements";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./Assets/logo.png")} />
        <View style={styles.buttonPanel}>
          <Button
            onPress={() => navigate("LostView")}
            title="Lost"
            color="rgb(112,99,85)"
            accessibilityLabel="What did you lost?"
            backgroundColor="rgb(235, 192, 47)"
          />
          <Button
            onPress={() => navigate("FoundView")}
            title="Found"
            color="rgb(112,99,85)"
            accessibilityLabel="We can help you"
            backgroundColor="rgb(235, 192, 47)"
          />
        </View>
      </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  LostView: { screen: LostView },
  FoundView: { screen: FoundView },
  Form: { screen: Form },
  Details: { screen: Details }
});

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(188,204,189)"
  },
  buttonPanel: {
    flexDirection: "row",
    paddingTop: 30
  }
});

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
