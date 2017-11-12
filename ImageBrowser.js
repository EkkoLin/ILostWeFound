import React, { Component } from "react";
import { Image, CameralRoll, View, Text, Button } from "react-native";
// import RNFetchBlob from 'react-native-fetch-blob';

export default class ImageBrowser extends Component {
  static navigationOptions = {
    title: "ImageBrowser"
  };

  // Add take photo component
  render() {
    return (
      <View>
        <Text>Image Browser</Text> 
      </View>
    );
  }
}
