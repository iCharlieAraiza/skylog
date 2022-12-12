import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text } from "@rneui/base";
//import { MapForm } from "../MapForm";
import { styles } from "./InfoForm.style";

export function InfoForm(props) {
  const { formik } = props;
  const [showMap, setShowMap] = useState(false);
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ruta del vuelo</Text>
      <Input
        placeholder="Origen (Código ICAO)"
        onChangeText={(text) => formik.setFieldValue("origin", text)}
        errorMessage={formik.errors.origin}
      />
      <Input
        placeholder="Destino (Código ICAO)"
        onChangeText={(text) => formik.setFieldValue("destination", text)}
        errorMessage={formik.errors.destination}
      />
      <Input
        placeholder="Altitud (Nivel de vuelo o pies)"
        onChangeText={(text) => formik.setFieldValue("altitude", text)}
        errorMessage={formik.errors.altitude}
      />
      <Text style={styles.title}>Datos de la aeronave</Text>
      <Input
        placeholder="Modelo del avión"
        onChangeText={(text) => formik.setFieldValue("plane", text)}
        errorMessage={formik.errors.plane}
      />
      <Input
        placeholder="Matrícula"
        onChangeText={(text) => formik.setFieldValue("registration", text)}
        errorMessage={formik.errors.registration}
      />
      <Text style={styles.title}>Descripción del vuelo</Text>
      <Input
        placeholder="Descripción"
        multiline={true}
        inputContainerStyle={styles.textArea}
      />
    </View>
  );
}

/*

export function InfoForm(props) {
  const { formik } = props;
  const [showMap, setShowMap] = useState(false);

  const onOpenCloseMap = () => setShowMap((prevState) => !prevState);

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Nombre del restaurante"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder="Dirección"
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
        />
        <Input
          placeholder="Telefono"
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          errorMessage={formik.errors.phone}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Descripcion del restaurante"
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
        />
      </View>

      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "#00a680";

  return "#c2c2c2";
};*/
