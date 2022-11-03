import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  homeDescTitle: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    color: '#383838',
  },
  pricesText: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPriceText: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  priceText: {
    fontWeight: '900',
    color: 'black',
  },
  totalPriceText: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default styles;
