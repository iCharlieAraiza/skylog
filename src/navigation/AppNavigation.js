import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AccountScreen } from "../screens/AccountScreen";
import { View, Text } from "react-native";
import { Icon } from "@rneui/base";
import { screen } from "../utils/screenName";

import { FlightsStack } from "./FlightsStack";
import { CreateLogStack } from "./CreateLogStack";
import { AccountStack } from "./AccountStack";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => iconOption(route, color, size),
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
      })}
    >
      <Tab.Screen
        name={screen.flights.tab}
        component={FlightsStack}
        options={{ title: "Vuelos" }}
      />
      <Tab.Screen
        name={screen.createLog.tab}
        component={CreateLogStack}
        options={{ title: "Nuevo vuelo" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

function iconOption(route, color, size) {
  let iconName;

  if (route.name === screen.flights.tab) {
    iconName = "airplane";
  }
  if (route.name === screen.createLog.tab) {
    iconName = "plus-circle-outline";
  }
  if (route.name === screen.account.tab) {
    iconName = "account-circle";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
