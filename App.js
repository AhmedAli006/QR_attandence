
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from './Screens/QrScanner';
import Home from './Screens/Home';

const App = () => {
const Stack = createStackNavigator();

// https://bbsultest.000webhostapp.com/QRuri.php?qr=


  return (
   <>
 <NavigationContainer >
   <Stack.Navigator initialRouteName='scanner' >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="scanner" component={QrScanner} />
   
    </Stack.Navigator>
    
  </NavigationContainer>
   </>
  )
}

export default App