import {getStatusBarHeight} from 'react-native-status-bar-height'

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 72, 
    paddingHorizontal: 20,
  },
  ContainerHeader:{
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextAppName:{
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Poppins-Bold'
  },
  NewTransactionButton:{
    backgroundColor: '#6933FF',
    padding: 10,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',


  },
  TextNewTransactionButton: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 18, 
 
  }
})