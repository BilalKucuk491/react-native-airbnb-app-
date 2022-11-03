import {View, Text, SafeAreaView, StatusBar,Pressable} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
const App = () => {
  return (
    <View>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post/>
      </SafeAreaView>
    </View>
  );
};

export default App;
