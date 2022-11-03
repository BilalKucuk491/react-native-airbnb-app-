import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchButton: {
    backgroundColor: 'white',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"black",
    marginLeft:10
  },
  title: {
    color: 'white',
    fontSize: 85,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 25,
    height: 40,
    width: 200,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"black",
  },
});

export default styles;
