import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
