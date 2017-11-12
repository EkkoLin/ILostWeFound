import React, { Component } from "react";
import LostView from "./LostView";
import FoundView from "./FoundView";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import Form from './Form';

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('./Assets/logo.png')}
        />
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
  button: {
    backgroundColor: 'rgb(225,113,50)',
    fontSize: 20
  }
});


export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
