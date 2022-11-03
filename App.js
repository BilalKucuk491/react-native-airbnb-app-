import {View, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from "./src/screens/Guest";

const App = () => {
  return (
    <View>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen/> */}
        <GuestsScreen/>
      </SafeAreaView>
    </View>
  );
};

export default App;
