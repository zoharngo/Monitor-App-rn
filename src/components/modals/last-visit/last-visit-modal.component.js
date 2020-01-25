import React from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Button } from "react-native";
import { hideModal } from "../../../redux/reducers/modals/last-visit/last-visit-action";
import { selectLastVisitMessageBody } from "../../../redux/reducers/modals/last-visit/last-visit-selector";

const LastVisitModal = ({ visible, title, messageBody, closeModal }) => {
  const onPressHandler = () => closeModal();
  const { name, date } = messageBody;
  return (
    <View visible={visible} style={styles.inputContainer}>
      <View style={styles.bodyContainer}>
        <Text>{title}</Text>
        <Text></Text>
        <Text>{name} was last monitord </Text>
        <Text>{date} days ago </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title={"Ok"} onPress={onPressHandler} />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(hideModal())
});

const mapStateToProps = state => ({
  messageBody: selectLastVisitMessageBody(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LastVisitModal);

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    position: "absolute",
    top: "20%",
    backgroundColor: "white",
    zIndex: 2,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    height: "50%",
    paddingTop: 20,
    alignItems: "center",
    flexDirection: "column",
    padding: 10
  },
  bodyContainer: { flex: 3, alignItems: "center" },
  buttonContainer: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    alignItems: "flex-end"
  }
});
