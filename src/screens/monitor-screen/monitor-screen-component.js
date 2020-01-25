import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/header/header-component";
import MainTab from "../../components/navigators/top-tab-navigator";

const MonitorScreen = () => (
  <View style={styles.screen}>
    <Header style={{ flex: 1 }} />
    <MainTab style={{ flex: 2 }} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column"
  }
});
export default MonitorScreen;
