import React, { PureComponent, Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class LostView extends PureComponent {
  static navigationOptions = {
    title: "LostView"
  };

  //   state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  onPressItem = id => {
    // copy the map rather than modifying state.
    const selected = new Map(state.selected);
    selected.set(id, !selected.get(id)); // toggle
    return { selected };
  };

  renderItem = ({ item }) => (
    <LostItem
      id={item.id}
      onPressItem={this.onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <List>
        <FlatList
          data={losts}
          extraData={this.state}
          renderItem={({ item }) => 
            <ListItem 
                title={item.title} 
                subtitle={item.key}
            />}
        />
      </List>
    );
  }
}

const losts = [
  {
    title: "Title text",
    key: "item1"
  },
  {
    title: "Title text2",
    key: "item2"
  },
  {
    title: "Title text3",
    key: "item3"
  }
];
