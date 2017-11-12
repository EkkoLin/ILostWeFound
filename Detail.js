import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { Avatar, Divider } from "react-native-elements";

export default class Details extends Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor() {
    super();
    this.state = {
      name: "B.Guest Wifi",
      url: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/494/771/datas/original.png",
      where: "B Building # 22 Warrington Ave Brooklyn New York 11205",
      contact: "cunyhackathon2017f.slack.com",
      reward: "none"
    }
  }

  render() {
    console.log(this.props.item);
    return (
      /*<View style={styles.container}>
        <Image style={styles.image} source={{uri :this.state.url}}/>
        <Text>Item Name: {this.state.name}</Text>
        <Text>{this.state.where}</Text>
        <Text>{this.state.contact}</Text>
        <Text>{this.state.reward}</Text>
      </View>*/
      <View style={styles.container}>
        <Text style={styles.heading}>{this.state.name} </Text>
        <Text />

        <Avatar
          xlarge
          source={{ uri: this.state.url }}
          activeOpacity={0.7}
          style={{ alignItems: "center" }}
        />

        <Text />
        <Text style={styles.text}>{this.state.where}</Text>
        
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.label}>Contact: </Text>
          <Text style={styles.text}>{this.state.contact}</Text>
        </View>
        

        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.label}>Reward: </Text>
          <Text style={styles.text}>{this.state.reward} </Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(117,84,82)'
  },
  container: {
    flex: 1,
    backgroundColor: "rgb(188,204,189)",
    alignItems: "center"
  },
  text: {
    color: 'rgb(117,84,82)',
    fontSize: 19,
    textAlign: "left"

  },
  label: {
    color: 'rgb(59,49,45)',
    fontSize: 19,
    textAlign: "left"

  }
});


