import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import searchResults from '../../../assets/data/search';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
  
const DestinationSearchScreen = () => {

  const navigation = useNavigation();
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
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <EntypoIcon name="location-pin" size={30} color="black" />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
