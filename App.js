import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/HomeScreen/Home';
import QuestScreen from './src/Screens/QuestScreen/QuestScreen';
import ProjectContext from "./src/ProjectContext"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProjectContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="quests" component={QuestScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProjectContext>
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
