import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  button:{
    borderWidth:2,
    width:40,
    height:40,
    borderRadius:20,
    borderColor:"lightgrey",
    justifyContent:"center",
    alignItems:"center",
  }
});

export default styles;
