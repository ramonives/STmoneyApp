import React from 'react';
import {Text, TextInput, View} from 'react-native';

export const InputNewTransaction = ({
  placeholder,
  value,
  onChange,
  keyboardType,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          backgroundColor: '#E7E9EE',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#D7D7D7',
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          color: '#363F5F',
          paddingLeft: 16,
        }}
      />
    </View>
  );
};
