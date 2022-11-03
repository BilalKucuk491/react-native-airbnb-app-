import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

import SearchResultsScreen from './src/screens/SearchResults';

const App = () => {

  return (
    <View>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <SearchResultsScreen/>
      </SafeAreaView>
    </View>
  );
};

export default App;
