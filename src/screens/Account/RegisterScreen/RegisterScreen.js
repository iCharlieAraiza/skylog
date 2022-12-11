import React from "react";
import { View } from "react-native";
import { styles } from "./RegisterScreen.styles.js";
import { RegisterForm } from "../../../components/Auth/RegisterForm/RegisterForm.js";

export function RegisterScreen() {
  return (
    <View>
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </View>
  );
}
