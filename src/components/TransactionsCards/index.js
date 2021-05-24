import React from 'react';
import { Text, View } from 'react-native';

export const TransactionsCards = ({item}) => {
  return (
  <>
    <View style={{width: '100%', height: 128, backgroundColor: '#FFFF', borderRadius: 5, padding: 20, marginBottom: 10 }}>
      <Text numberOfLines={1}style={{color: '#363F5F', fontFamily: 'Poppins-Regular', fontSize: 16}}>{item.title}</Text>
      <Text numberOfLines={1} style={{color: '#12A454', fontFamily: 'Poppins-Regular', fontSize: 20}}>R$ {item.amount}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text numberOfLines={1} style={{color: '#969CB2', fontFamily: 'Poppins-Regular', fontSize: 16, width:210, maxWidth: 210}}>{item.type}</Text>
        <Text  numberOfLines={1} style={{color: '#969CB2', fontFamily: 'Poppins-Regular', fontSize: 16, }}>{item.data}</Text>
      </View>
    </View>
    </>
  );
}

