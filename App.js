import React from "react";
import MonitorScreen from "./src/screens/monitor-screen/monitor-screen-component";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => (
  <Provider store={store}>
    <View style={styles.app}>
      <MonitorScreen />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  app: {
    paddingTop: "10%",
    flex: 1
  }
});

export default App;
