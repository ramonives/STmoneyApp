import {getStatusBarHeight} from 'react-native-status-bar-height';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  ContainerContent: {
    height: 150,
    width: 300,
    backgroundColor: '#FFFF',
    marginRight: 20,
    borderRadius: 5,
    padding: 20,
  },
  ContainerTitleWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  Title: {
    fontFamily: 'Poppins-Regular',
    color: '#363F5F',
    fontSize: 16,
  },
  Amount: {
    fontFamily: 'Poppins-Regular',
    color: '#363F5F',
    fontSize: 30,
  },

  ContainerContentTotal: {
    height: 150,
    width: 300,
    backgroundColor: '#33CC95',
    marginRight: 20,
    borderRadius: 5,
    padding: 20,
  },
  TitleTotal: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 16,
  },
  AmountTotal: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 30,
  },
});
