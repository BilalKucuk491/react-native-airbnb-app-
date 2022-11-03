import {View, ImageBackground, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      {/* search bard */}

      <ImageBackground
        source={require('../../../assets/images/background.jpg')}
        style={styles.backgroundImage}>
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('search btn cliked')}>
          <FontistoIcon name="search" size={24} color={"#f15454"} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        {/* title */}
        <Text style={styles.title}>Go Near</Text>

        {/* button */}

        <Pressable
          style={styles.button}
          onPress={() => console.warn('explore btn cliked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
