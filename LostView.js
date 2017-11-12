import React, { PureComponent, Component } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import Details from "./Detail";
import lostItemsJSON from "./ModelData/lost.json";
import { Button } from "react-native-elements";

export default class LostView extends PureComponent {
  static navigationOptions = {
    title: "LostView"
  };

  constructor() {
    super();
    this.state = {
      items: [],
      loading: false,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    const items = lostItemsJSON;
    this.setState({ items });
  }

  makeRequest() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        items: lostItemsJSON,
        // error: res.error || null,
        loading: false,
        refreshing: false
      });
    }, 1500);
  }

  handleRefresh = () => {
    this.setState({
      refreshing: true
    });
    const items = lostItemsJSON;    
    this.setState({items, refreshing: false});
  }

  handleLoadMore = () => {
    this.makeRequest();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
<<<<<<< HEAD
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'rgb(117,84,82)' }}>I Lost</Text>
        <Button
          large
          onPress={() => navigate("Form")}
          title="Post New"
          backgroundColor="rgb(235, 192, 47)"
          accessibilityLabel="Post something new"
        />
        <ScrollView>
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
=======
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            color: "rgb(117,84,82)"
          }}
        >
          I Lost
        </Text>
        <Button
          large
          onPress={() => navigate("Form")}
          title="ADD LOST"
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
                onPress={() => {
                  <Details item={item} />;
                  navigate("Details");
                }}
              />
            )}
            keyExtractor={item => item.contact}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={5}
          />
        </List>
>>>>>>> master
      </View>
    );
  }
}
