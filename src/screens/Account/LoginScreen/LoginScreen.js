import React from "react";
import { View, ScrollView } from "react-native";
import { Image, Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./LoginScreen.styles";
import { LoginForm } from "../../../components/Auth/LoginForm/LoginForm";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView>
      <LoginForm />
      <View style={styles.content}>
        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}