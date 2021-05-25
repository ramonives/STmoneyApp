import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const TransactionsCards = ({transaction}) => {

  console.log("=> ", transaction);

  return (
    <>
      <View style={styles.ContainerCard}>
        <Text numberOfLines={1} style={styles.Title}>
          {transaction.title}
        </Text>
        <Text numberOfLines={1} style={styles.TextAmount}>
          R$ {transaction.amount}
        </Text>
        <View style={styles.ContainerRow}>
          <Text numberOfLines={1} style={styles.TextType}>
            {transaction.category}
          </Text>
          <Text numberOfLines={1} style={styles.TextData}>
            {transaction.data}
          </Text>
        </View>
      </View>
    </>
  );
};
