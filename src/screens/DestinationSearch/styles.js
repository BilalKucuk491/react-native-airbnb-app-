import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  locationText: {
    color: 'black',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
});

export default styles;
