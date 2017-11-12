import React, { PureComponent, Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";
import foundItemsJSON from './ModelData/found.json';
import { Button } from 'react-native-elements';

export default class FoundView extends Component {
  static navigationOptions = {
    title: "FoundView"
  };

  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const items = foundItemsJSON;
    this.setState({ items });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'rgb(117,84,82)'}}>We Found</Text>
        <Button 
          large
          onPress={ () => navigate("Form") }
          title="Post New"
          backgroundColor="rgb(235, 192, 47)"
          accessibilityLabel="Post something new"
        />
        <List>
        <FlatList
          data={this.state.items}
          extraData={this.state}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              key={item.contact}
              title={item.name}
              subtitle={item.where}
              avatar={{ uri: item.imageUrl }}
            />
          )}
          keyExtractor={item => item.contact}
        />
      </List>
      </View>
    );
  }
}
