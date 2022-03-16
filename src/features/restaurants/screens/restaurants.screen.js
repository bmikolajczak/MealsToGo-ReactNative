import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

const isAndroid = Platform.OS === "android";
export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search for Ristorante" style={styles.searchbar} />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  searchbar: {
    borderRadius: 50,
  },
});
