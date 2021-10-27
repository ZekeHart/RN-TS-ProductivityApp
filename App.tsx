import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useColorScheme from './hooks/useColorScheme';
import HomeScreen from './screens/HomeScreen'
import Colors from './constants/Colors';



const Stack = createNativeStackNavigator();

function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <FontAwesome
            name="heart"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
