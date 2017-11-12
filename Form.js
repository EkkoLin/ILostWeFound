import React, { Component } from "react";
import { Alert, AppRegistry, Text, TextInput, View } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class Form extends Component {
  static navigationOptions = {
    title: "Post New Object"
  };

  constructor() {
    super();
    this.state = {
      name: "",
      url: "",
      where: "",
      contact: "",
      reward: ""
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    (this.state.name === "") ? Alert.alert("Please enter your name") : null;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FormLabel>ITEM NAME</FormLabel>
        <FormInput onChangeText={name => this.setState({ name })}/>
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

        <FormLabel>WHERE</FormLabel>
        <FormInput onChangeText={where => this.setState({ where })} />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

        <FormLabel>CONTACT</FormLabel>
        <FormInput onChangeText={contact => this.setState({ contact })} />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

        <FormLabel>REWARD</FormLabel>
        <FormInput onChangeText={reward => this.setState({ reward })} />
        <FormValidationMessage>
          {"Better have something"}
        </FormValidationMessage>

        <Button
          large
          title="choose/take a picture"
          backgroundColor="rgb(29, 172, 231)"
          accessibilityLabel="Camera"
        />

        <Button
          large
          title="Submit"
          backgroundColor="rgb(235, 192, 47)"
          onPress={this.onButtonPress}
          accessibilityLabel="Submit"
        />
      </View>
    );
  }
}
