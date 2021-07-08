import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {StatusBar} from 'react-native';
import {TransactionsProvider} from './src/contexts/TransactionsContext';

const App = () => {
  return (
    // <NavigationContainer>
    //   <StatusBar
    //     backgroundColor="transparent"
    //     translucent
    //     barStyle="light-content"
    //   />
    //   <TransactionsProvider>
    //     <Routes />
    //   </TransactionsProvider>
    // </NavigationContainer>
    <View>
      <Text>Olá Mundo</Text>
    </View>
  );
};

export default App;
