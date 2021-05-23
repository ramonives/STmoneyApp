import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {Text, TouchableOpacity, View } from 'react-native';

import {styles} from './styles'
import { Dashboard } from '../../components/Dashboard';

export const Home = () => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#5429CC', '#7159c1']}>
      <View style={styles.Container}>
        <View style={styles.ContainerHeader}>
          <Text style={styles.TextAppName}>STmoney</Text>
          <TouchableOpacity style={styles.NewTransitionButton}><Text style={styles.TextNewTransitionButton}>Nova transação</Text></TouchableOpacity>
        </View>
        <View style={{marginTop: 32}}>
       <Dashboard />
        </View>
        <View style={{marginTop: 32}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'white', fontFamily: 'Poppins-Regular', fontSize: 20}}>
            Listagem
            </Text>
            <Text style={{color: 'white', fontFamily: 'Poppins-Regular', fontSize: 20}}>
            5 itens 
            </Text>
          </View>
         
        </View>
      </View>
    </LinearGradient>
  )
}
