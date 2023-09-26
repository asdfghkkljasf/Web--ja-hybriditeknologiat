import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen'
import SecondScreen from './SecondScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        option={{
          title: 'Home',
          headerTitle: 'Home',
        }}
        />
        <Stack.Screen
        name='Second'
        component={SecondScreen}
        option={{
          title: 'Second',
          headerTitle:'Second'
        }}
        />
        </Stack.Navigator> 
           </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
