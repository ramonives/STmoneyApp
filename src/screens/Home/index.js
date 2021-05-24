import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Dashboard} from '../../components/Dashboard';
import {TransactionsCards} from '../../components/TransactionsCards';

export const Home = () => {
  const DATA = [
    {
      id: 1,
      title: 'Desenvolvimento de site',
      amount: '2.000,00',
      type: 'Vendas',
      data: '15/04/2020',
    },
    {
      id: 2,
      title: 'Desenvolvimento de site e app',
      amount: '5.000,00',
      type: 'Vendas',
      data: '22/04/2020',
    },
    {
      id: 3,
      title: 'Desenvolvimento de app',
      amount: '3.000,00',
      type: 'Vendas',
      data: '05/06/2020',
    },
    {
      id: 4,
      title: 'Desenvolvimento de app',
      amount: '3.000,00',
      type: 'Vendas',
      data: '05/06/2020',
    },
    {
      id: 5,
      title: 'Desenvolvimento de app',
      amount: '3.000,00',
      type: 'Vendas',
      data: '05/06/2020',
    },
    
  ];

  return (
    <LinearGradient style={{flex: 1}} colors={['#5429CC', '#7159c1']}>
      <View style={styles.Container}>
        <View style={styles.ContainerHeader}>
          <Text style={styles.TextAppName}>STmoney</Text>
          <TouchableOpacity style={styles.NewTransactionButton}>
            <Text style={styles.TextNewTransactionButton}>Nova transação</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 32}}>
          <Dashboard />
        </View>
        <View style={{marginTop: 32, flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
              }}>
              Listagem
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
              }}>
              5 itens
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({item}) => <TransactionsCards item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
