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

const App = () => {
  const post1 = feed[2];

  return (
    <View>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <ScrollView>
          {feed.map(item => (
            <Post key={item.id} post={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
