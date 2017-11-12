import React, { PureComponent, Component } from "react";
import { ListView, View, Text, FlatList, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { StackNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";
import foundItemsJSON from './ModelData/found.json';
import { Button } from 'react-native-elements';
import Details from "./Detail";

export default class FoundView extends Component {
  static navigationOptions = {
    title: "FoundView"
  };

  constructor() {
    super();
    this.state = {
      items: [],
      refreshing: false
    };
  }

  componentDidMount() {
    const items = foundItemsJSON;
    this.setState({ items });
  }

  _onRefresh() {
    this.setState({refreshing: true});
    const items = foundItemsJSON;
    console.log("refreshing");
    this.setState({ items, refreshing: false });

  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'rgb(117,84,82)' }}>We Found</Text>
        <Button
          large
          onPress={() => navigate("Form")}
          title="Post New"
          backgroundColor="rgb(235, 192, 47)"
          accessibilityLabel="Post something new"
        />
        <ScrollView onMomentumScrollEnd={this._onRefresh.bind(this)}>
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
                  onPress={() => {
                    <Details item={item} />
                    navigate("Details");
                  }}
                />
              )}
              keyExtractor={item => item.contact}
            />
          </List>
        </ScrollView>
      </View>
    );
  }
}
