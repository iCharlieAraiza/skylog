import { View, ScrollView } from 'react-native'
import React from 'react'
import { Text, Button, Image } from '@rneui/base'
import { screen } from "../../../utils/screenName";
import { styles } from './UserGuestScreen.styles.js';
import { useNavigation } from "@react-navigation/native";


export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Text style={styles.title}>Consultar tu perfil de SkyLog</Text>
      <Text style={styles.description}>
        Registrate tus vuelos a través de SkyLog de forma fácil y rápida. 
        Podrás tener una bitácora completa desde la palma de tu mano.
      </Text>

      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}