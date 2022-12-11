import React, { useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { UserLoggedScreen } from './UserLoggedScreen'
import { UserGuestScreen } from './UserGuestScreen/UserGuestScreen'

import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal'

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null)  
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false)
    })
  }, [])

  if (hasLogged === null) {
    return <LoadingModal show={true} text='Cargando...'/>
  }

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />

}