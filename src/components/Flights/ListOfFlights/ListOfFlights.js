import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Image, Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import { styles } from "./ListOfFlights.styles";

export function ListOfFlights(props) {
  const { flights } = props;
  const navigation = useNavigation();

  const goToRestaurant = (restaurant) => {
    navigation.navigate(screen.flights.showFlight, { id: restaurant.id });
  };

  return (
    <FlatList
      data={flights}
      renderItem={(doc) => {
        const restaurant = doc.item.data();

        return (
          <TouchableOpacity onPress={() => goToRestaurant(restaurant)}>
            <View style={styles.restaurant}>
              <View>
                <Text style={styles.name}>
                  {restaurant.origin} - {restaurant.destination}
                </Text>
                <Text style={styles.info}>
                  {restaurant.plane} - {restaurant.registration}
                </Text>
                <Text style={styles.info}>{restaurant.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
