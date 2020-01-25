import React from "react";
import PestsTab from "../tabs/pests-tab/pests-tab.component";
import TrapsTab from "../tabs/traps-tab/traps-tab.component";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationNativeContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function MainTab() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pests" component={PestsTab} />
        <Tab.Screen name="Traps" component={TrapsTab} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}
