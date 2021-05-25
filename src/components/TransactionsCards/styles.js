const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  ContainerCard: {
    width: '100%',
    height: 128,
    backgroundColor: '#FFFF',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
  },
  Title: {
    color: '#363F5F',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  TextAmount: {
    color: '#12A454',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  ContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextType: {
    color: '#969CB2',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    width: 210,
    maxWidth: 210,
  },
  TextData: {
    color: '#969CB2',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
