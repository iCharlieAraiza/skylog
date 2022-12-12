import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from "react-native";
import { Button } from "@rneui/base";

import { styles } from './CreateLogScreen.style'
import { screen } from '../../utils/screenName'
import { InfoForm } from '../../components/CreateLog/InfoForm/InfoForm';
import { initialVales, validationSchema } from './CreateLogScreen.data';
import { useFormik } from 'formik';
import { v4 as uuid } from "uuid";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useNavigation } from "@react-navigation/native";


export function CreateLogScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const newData = formData
        newData.id = uuid()
        newData.createdAt = new Date()
        await setDoc(doc(db, "flights", newData.id), newData);
        navigation.goBack();

        console.log(newData)
      } catch (error) {
        console.log(error);
      }
      console.log("Hola", formData)
    }
  });
  return (
    <ScrollView >
      <InfoForm formik={formik} />
      <Button
        buttonStyle={styles.addLog}
        title="Crear Vuelo"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  )
}