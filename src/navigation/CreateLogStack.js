import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { screen } from "../utils/screenName";

import { CreateLogScreen } from "../screens/CreateLogScreen";

const Stack = createNativeStackNavigator();

export function CreateLogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.createLog.create}
        component={CreateLogScreen}
        options={{ title: "Crear nuevo Vuelo" }}
      />
    </Stack.Navigator>
  );
}
