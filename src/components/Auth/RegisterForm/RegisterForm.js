import { View } from 'react-native'
import React from 'react'
import { Input, Icon, Button, Text } from '@rneui/base'
import { styles } from './RegisterForm.styles.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik'

export function RegisterForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log(formData)
        }
    })

  return (
    <KeyboardAwareScrollView>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={ false}
        rightIcon={
          <Icon
            type="material-community"
            name={"eye-off-outline"}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={"eye-off-outline"}
            iconStyle={styles.icon}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </KeyboardAwareScrollView>
  )
}