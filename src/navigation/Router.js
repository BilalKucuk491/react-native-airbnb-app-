import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';

// screens
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guest';
import ExploreNavigator from './ExploreNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: 'How many people',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
