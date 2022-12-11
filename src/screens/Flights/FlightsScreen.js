import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../utils/screenName'


export function FlightsScreen(props) {

  const { navigation } = props

  const handlePress = () => {
    //navigation.navigate(screen.flights.showFlight)
    navigation.navigate(screen.createLog.tab, { screen: screen.createLog.create })
    console.log('Ver vuelo', navigation)
  }

  return (
    <View>
      <Text>Flights</Text>
      <Button title='Ver vuelo' onPress={handlePress} />
    </View>
  )
}