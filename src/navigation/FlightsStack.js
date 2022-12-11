import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";

import { ShowFlightScreen } from "../screens/Flights/ShowFlightScreen";
import { FlightsScreen } from "../screens/Flights/FlightsScreen";

const Stack = createNativeStackNavigator();

export function FlightsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.flights.tab}
        component={FlightsScreen}
        options={{ title: "Detalles del Vuelo" }}
      />
      <Stack.Screen
        name={screen.flights.showFligh}
        component={ShowFlightScreen}
        options={{ title: "Detalles del Vuelo" }}
      />
    </Stack.Navigator>
  );
}
