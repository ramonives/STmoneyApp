import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import EntradasIcon from '../../assets/icons/entradas.js';
import SaidasIcon from '../../assets/icons/saida.js';
import TotalIcon from '../../assets/icons/total.js';

import {styles} from './styles';

export const Dashboard = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.ContainerContent}>
          <View style={styles.ContainerTitleWithIcon}>
            <Text style={styles.Title}>Entradas</Text>
            <EntradasIcon width={30} height={30} />
          </View>
          <Text style={styles.Amount}>R$ 10.000</Text>
        </View>

        <View style={styles.ContainerContent}>
          <View style={styles.ContainerTitleWithIcon}>
            <Text style={styles.Title}>Saídas</Text>
            <SaidasIcon width={30} height={30} />
          </View>
          <Text style={styles.Amount}>R$ 3.000</Text>
        </View>

        <View style={styles.ContainerContentTotal}>
          <View style={styles.ContainerTitleWithIcon}>
            <Text style={styles.TitleTotal}>Total</Text>
            <TotalIcon width={30} height={30} />
          </View>
          <Text style={styles.AmountTotal}>R$ 7.000</Text>
        </View>
      </ScrollView>
    </View>
  );
};
