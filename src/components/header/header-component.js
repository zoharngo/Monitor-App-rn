import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Monitoring</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    width: "100%",
    height: 75
  },
  text: {
    fontSize: 25
  }
});
