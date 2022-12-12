import { View } from "react-native";
import { Text, Avatar } from "@rneui/base";
import { getAuth, updateProfile } from "firebase/auth";
import { styles } from "./InfoUser.style.js";
import React, {useState} from "react";

export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);
  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
        source={{ uri: avatar }}
      ></Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
