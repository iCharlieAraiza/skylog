import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from "react-native";
import { Button } from "@rneui/base";

import { styles } from './CreateLogScreen.style'
import { screen } from '../../utils/screenName'
import { InfoForm } from '../../components/CreateLog/InfoForm/InfoForm';
import { initialVales, validationSchema } from './CreateLogScreen.data';
import { useFormik } from 'formik';

export function CreateLogScreen() {
  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      console.log("Hola", formData);
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