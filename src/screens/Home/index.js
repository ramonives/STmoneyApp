import React, { useContext, useRef, useState } from "react";

import LinearGradient from "react-native-linear-gradient";

import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { Dashboard } from "../../components/Dashboard";
import { TransactionsCards } from "../../components/TransactionsCards";
import TransactionsContext from "../../contexts/TransactionsContext";
import { NewTransactionModal } from "../../components/Modals/NewTransactionModal/NewTransactionModal";

import { styles } from "./styles";

export const Home = () => {
  const { transactions } = useContext(TransactionsContext);

  const modalizeRef = useRef(null);

  const onOpenModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#5429CC", "#7159c1"]}>
      <View style={styles.Container}>
        <View style={styles.ContainerHeader}>
          <Text style={styles.TextAppName}>STmoney</Text>
          <TouchableOpacity
            style={styles.NewTransactionButton}
            onPress={() => onOpenModal()}>
            <Text style={styles.TextNewTransactionButton}>Nova transação</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ContainerDashboard}>
          <Dashboard />
        </View>
        <View style={styles.ContainerTransactionsList}>
          <View style={styles.ContainerTitleList}>
            <Text style={styles.TitleList}>Listagem</Text>
            <Text style={styles.TitleList}>5 itens</Text>
          </View>
          <FlatList
            data={transactions}
            renderItem={({ item }) => <TransactionsCards transaction={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <NewTransactionModal modalizeRef={modalizeRef} />
    </LinearGradient>
  );
};
