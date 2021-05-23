import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent"
      translucent
      barStyle="light-content"/>
      <Routes />
    </NavigationContainer>
  )
}

export default App;