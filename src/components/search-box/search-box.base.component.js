import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBox = ({ searchAction }) => {
  const [text, setText] = useState("");

  const onTextChange = textSearch => {
    setText(textSearch);
    searchAction(textSearch);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onTextChange}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default SearchBox;
