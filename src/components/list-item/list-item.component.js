import React from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Button } from "react-native";
import { showModal } from "../../redux/reducers/modals/last-visit/last-visit-action";

const ListItem = ({ item, bell, showLastVisit }) => {
  const { name, update_date } = item;
  const onPressHandler = () =>
    showLastVisit({
      name,
      date: update_date
    });

  return (
    <View style={styles.listItem}>
      <View style={styles.titleContainer}>
        <Text> {name} </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title={bell ? "bell" : " i "} onPress={onPressHandler} />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  showLastVisit: message => dispatch(showModal(message))
});

export default connect(null, mapDispatchToProps)(ListItem);

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
