import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button } from 'react-native';
import { StackNavigator } from "react-navigation";
import 

export default class Form extends Component {
    static navigationOptions = {
        title: "Post New Object"
    };

    constructor() {
        super();
        this.state = {
            name: '',
            url: '',
            where: '',
            contact: '',
            reward: '',
        };

        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        let alertString = 'Your name is ' + this.state.name;
        Alert.alert(alertString);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Name: </Text>
                <TextInput onChangeText={ (name) => this.setState({name:name}) } />
                <Text>imageURL: </Text>
                <TextInput onChangeText={ (url) => this.setState({url}) } />
                <Text>Where: </Text>
                <TextInput onChangeText={ (where) => this.setState({where}) } />
                <Text>Contact: </Text>
                <TextInput onChangeText={ (contact) => this.setState({contact}) } />
                <Text>Reward: </Text>
                <TextInput onChangeText={ (reward) => this.setState({reward}) } />
                <Button
                    title="Submit"
                    color="#841584"
                    onPress={ this.onButtonPress }
                    accessibilityLabel="Submit"
                />
            </View>
        );
    }
}