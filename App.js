import {View, Text, SafeAreaView, StatusBar,Pressable} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
};

export default App;
