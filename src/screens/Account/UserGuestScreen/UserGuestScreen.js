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
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sito tu experiencia.
      </Text>

      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}