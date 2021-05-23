import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';

export const Dashboard = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.ContainerContent}>
        <Text>ENTRADAS</Text>
        <Text>R$ 10.000</Text>
        <Text>Última entrada dia 13 de abril</Text>
      </View>
      <View style={styles.ContainerContent}>     
         <Text>SAIDAS</Text>
        <Text>R$ -3.000</Text>
        <Text>Última entrada dia 13 de abril</Text>
      </View>
      <View style={styles.ContainerContent}>      
        <Text>TOTAL</Text>
        <Text>R$ 7.000</Text>
        <Text>Última entrada dia 13 de abril</Text>
      </View>
      </ScrollView>
    </View>

  )
}
