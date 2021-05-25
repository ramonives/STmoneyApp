import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FecharModalIcon from '../../../assets/icons/fecharModal.js';

import {Modalize} from 'react-native-modalize';

import {InputNewTransaction} from '../../Inputs/InputNewTransaction/InputNewTransaction.js';

import EntradasIcon from '../../../assets/icons/entradas';
import SaidasIcon from '../../../assets/icons/saida';

export const NewTransactionModal = ({modalizeRef}) => {
  const [type, setType] = useState('deposit');

  const handleCloseModal = () => {
    modalizeRef.current.close();
  };

  return (
    <>
      <Modalize
        ref={modalizeRef}
        closeOnOverlayTap={true}
        modalHeight={450}
        handleStyle={{backgroundColor: '#7159c1'}}
        handlePosition={'inside'}
        modalStyle={{
          backgroundColor: '#F0F2F5',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              color: '#363F5F',
            }}>
            Cadastrar transação
          </Text>
          <TouchableOpacity onPress={() => handleCloseModal()}>
            <FecharModalIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewTransaction placeholder={'Nome'} />
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewTransaction placeholder={'Preço'} keyboardType={'numeric'} />
        </View>
        <View
          style={{
            marginBottom: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: 160,
              height: 56,
              borderColor: `${type === 'deposit' ? '#33CC95' : '#969CB3'}`,
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
            onPress={() => {
              setType('deposit');
            }}>
            <EntradasIcon width={30} height={30} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
                color: '#363F5F',
              }}>
              Entrada
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: 160,
              height: 56,
              borderColor: `${type === 'withdraw' ? '#E62E4D' : '#969CB3'}`,
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
            onPress={() => {
              setType('withdraw');
            }}>
            <SaidasIcon width={30} height={30} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
                color: '#363F5F',
              }}>
              Saída
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 24}}>
          <InputNewTransaction placeholder={'Categoria'} />
        </View>
        <TouchableOpacity style={{backgroundColor: "#33CC95", height: 56, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: "#FFFF", fontSize: 16, fontFamily: 'Poppins-Regular',}}>Cadastrar</Text>
        </TouchableOpacity>
      </Modalize>
    </>
  );
};
