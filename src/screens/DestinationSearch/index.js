import {View, TextInput, FlatList, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import EntypoIcon from "react-native-vector-icons/Entypo";

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* input components */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* list of destinations */}

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
            <EntypoIcon name='location-pin' size={30} color="black" />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
