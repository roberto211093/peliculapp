import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';

export type RootSrackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createNativeStackNavigator<RootSrackParams>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailScreen"
        options={{contentStyle: {backgroundColor: '#f2f2f2'}}}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
