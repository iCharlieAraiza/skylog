import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Image } from "@rneui/base";

import { Header } from "../../components/Flights/Flight/Header/Header";
import { styles } from "./ShowFlightScreen.styles";

export function ShowFlightScreen(props) {
  const { route } = props;
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    setFlight(null);
    onSnapshot(doc(db, "flights", route.params.id), (doc) => {
      setFlight(doc.data());
    });
  }, [route.params.id]);

  if (!flight) {
    return null;
  }

  return (
    <View>
      <Image
        source={{
          url: "https://artefeed.com/wp-content/uploads/2022/12/plane-1.png",
        }}
      />
      <Header flight={flight} />
    </View>
  );
}
