import {View, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guest';

import Router from './src/navigation/Router';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <>
      <Router/>
    </>
  );
};

export default App;
