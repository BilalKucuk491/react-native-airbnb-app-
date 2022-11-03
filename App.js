import {View, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
const App = () => {
  return (
    <View>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearchScreen/>
      </SafeAreaView>
    </View>
  );
};

export default App;
