import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ListItem = ({ title, bell }) => (
  <View style={styles.listItem}>
    <View style={styles.titleContainer}>
      <Text> {title} </Text>
    </View>

    <View style={styles.buttonContainer}>
      <Button title={bell ? "bell" : " i "} />
    </View>
  </View>
);

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    paddingRight: 10,
    alignItems: "center",
    flex: 1,
    marginVertical: 0.8,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    height: 55,
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  },
  titleContainer: {
    paddingLeft: 10,
    flex: 4
  }
});
