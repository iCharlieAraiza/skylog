import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screenName";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { LoadingModal } from "../../components/shared/LoadingModal/LoadingModal.js";
import { ListOfFlights } from "../../components/Flights/ListOfFlights/ListOfFlights.js";  

export function FlightsScreen(props) {
  const { navigation } = props;
  const [flights, setFlights] = useState(null);

  const handlePress = () => {
    //navigation.navigate(screen.flights.showFlight)
    navigation.navigate(screen.createLog.tab, {
      screen: screen.createLog.create,
    });
    console.log("Ver vuelo", navigation);
  };

  useEffect(() => {
    const q = query(
      collection(db, "flights"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs)
      setFlights(snapshot.docs);
    });
  }, []);


  return (
    <View>
      {!flights ? (
        <LoadingModal show text="Cargando" />
      ) : (
        <ListOfFlights flights={flights} />
      )}
    </View>
  );
}
