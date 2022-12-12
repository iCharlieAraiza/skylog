import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/base";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components/shared/LoadingModal/LoadingModal";
import { InfoUser } from "../../../components/Account/InfoUser/InfoUser";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}