"use strict";

import React from "react-native";
import ImageButton from "react-native-img-button";

let {
 Dimensions,
 NetInfo,
 StyleSheet,
 Text,
 View,
 Image,
} = React;

export default class ImageButton extends React.Component {
 onPressButton() {
   console.log("Pressed!");
 }
 
 render() {
   return (
     <View style={ styles.container }>
       <ImageButton
         style={ styles.btn }
         appearance={ {
           normal: require("./Assets/buttons_PNG10.png"),
           highlight: require("./largeyellowbutton.jpg")
         } }
         onPress={ this.onPressButton }/>
     </View>
   );
 }
}

let styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 btn: {
   width: 50,
   height: 50,
 },
});