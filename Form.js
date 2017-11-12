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
    let alertString = "Your name is " + this.state.name;
    Alert.alert(alertString);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FormLabel>NAME</FormLabel>
        <FormInput
          onChangeText={name =>
            typeof name !== 'string' ? (
              <FormValidationMessage>
                {"This field is required"}
              </FormValidationMessage>
            ) : (
              this.setState({ name })
            )}
        />

        <FormLabel>WHERE</FormLabel>
        <FormInput onChangeText={where => this.setState({ where })} />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

        <FormLabel>Contact</FormLabel>
        <FormInput onChangeText={contact => this.setState({ contact })} />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

        <FormLabel>REWARD</FormLabel>
        <FormInput onChangeText={reward => this.setState({ reward })} />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

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
