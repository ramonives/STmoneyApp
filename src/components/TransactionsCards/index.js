import React from "react";
import { Text, View } from "react-native";
import { format } from "date-fns";
import { styles } from "./styles";

export const TransactionsCards = ({ transaction }) => {

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
            {format(transaction.createdAt, "dd/MM/yyyy")}
          </Text>
        </View>
      </View>
    </>
  );
};
