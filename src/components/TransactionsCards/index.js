import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const TransactionsCards = ({item}) => {
  return (
    <>
      <View style={styles.ContainerCard}>
        <Text numberOfLines={1} style={styles.Title}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.TextAmount}>
          R$ {item.amount}
        </Text>
        <View style={styles.ContainerRow}>
          <Text numberOfLines={1} style={styles.TextType}>
            {item.type}
          </Text>
          <Text numberOfLines={1} style={styles.TextData}>
            {item.data}
          </Text>
        </View>
      </View>
    </>
  );
};
