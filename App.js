import React, { Component } from "react";
import LostView from "./LostView";
import FoundView from "./FoundView";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import Form from './Form';
import Details from './Detail';


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
        <Image
        style={styles.buttonBg}
        source={require('./Assets/buttons_PNG10.png')}
        />
        <Image
        style={styles.buttonBg}
        source={require('./Assets/buttons_PNG10.png')}
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
  Details : {screen: Details}
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
  buttonBg: {
    width: 80,
    height: 30,
    left: 150,
    top: 410,
    position: "absolute",
    
  }
});


export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
