import { View, ActivityIndicator } from 'react-native'
import { Overlay, Text } from '@rneui/base'
import React from 'react'
import { styles } from './LoadingModals.styles'

export function LoadingModal(props) {

  const { show, text } = props

  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}