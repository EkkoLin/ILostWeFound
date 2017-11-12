import React, { Component } from "react";
import LostView from "./LostView";
import FoundView from "./FoundView";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import Form from './Form';
import Details from './Detail';
import { Button } from 'react-native-elements'

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
          color="rgb(30,30,30)"
          accessibilityLabel="What did you lost?"
          backgroundColor='rgb(235, 192, 47)'
        />
        <Button
          onPress={() => navigate("FoundView")}
          title="Found"
          color="rgb(30,30,30)"
          accessibilityLabel="We can help you"
          backgroundColor='rgb(235, 192, 47)'
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
