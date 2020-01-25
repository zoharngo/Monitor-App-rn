import { StyleSheet } from "react-native";

const TabStyles = StyleSheet.create({
  container: {
    zIndex: 0,
    alignItems: "center",
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.6,
    borderColor: "#d6d7da",
    width: "100%",
    flex: 1
  },
  spinnnerContainer: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default TabStyles;
