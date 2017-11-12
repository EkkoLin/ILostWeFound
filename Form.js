import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import { StackNavigator } from "react-navigation";

export default class Form extends Component {
    static navigationOptions = {
        title: "Post New Object"
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Name: </Text>
                <TextInput />
                <Text>imageURL: </Text>
                <TextInput />
                <Text>Where: </Text>
                <TextInput />
                <Text>Contact: </Text>
                <TextInput />
                <Text>Reward: </Text>
                <TextInput />
            </View>
        );
    }
}