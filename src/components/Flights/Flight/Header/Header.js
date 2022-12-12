import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/base";
import { styles } from "./Header.styles";

export function Header(props) {
  const { flight } = props;

  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{flight.origin} - {flight.destination}</Text>
      </View>
      <Text style={styles.description}>{flight.description}</Text>
      <Text style={styles.description}>Avión: {flight.plane} - {flight.registration}</Text>
    </View>
  );
}