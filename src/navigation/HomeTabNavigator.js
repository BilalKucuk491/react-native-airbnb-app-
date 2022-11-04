import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#f15454'}}>
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontistoIcon name="search" size={30} color={color} />
          ),
          headerShown: false,
        }}></Tab.Screen>

      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="heart-o" size={30} color={color} />
          ),
          headerShown: false,
        }}></Tab.Screen>

      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="airbnb" size={30} color={color} />
          ),
          headerShown: false,
        }}></Tab.Screen>

      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="message-square" size={30} color={color} />
          ),
          headerShown: false,
        }}></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIconsIcon name="user" size={30} color={color} />
          ),
          headerShown: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
