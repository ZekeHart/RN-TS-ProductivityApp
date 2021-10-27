import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen() {

  return (
    <View style={styles.container}>

        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Shopping Lists</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>To Dos</Text>
          </View>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addWrapper: {
    color: "white",
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.21)',
    // borderBottomColor: 'rgba(0,0,0,0.21)',
    textShadowColor: 'rgba(0,0,0,0.15)',
    margin: 5,
  },
  addText: {
    color: "white",
  },
  
});

// text-decoration: none;
// 	color: white;
// 	padding: 10px 30px;
// 	display: inline-block;
// 	position: relative;
// 	border: 1px solid rgba(0,0,0,0.21);
// 	border-bottom: 4px solid rgba(0,0,0,0.21);
// 	border-radius: 4px;
// 	text-shadow: 0 1px 0 rgba(0,0,0,0.15);


// background: rgba(27,188,194,1);
// 	background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(27,188,194,1)), to(rgba(24,163,168,1)));
// 	background: -webkit-linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
// 	background: -moz-linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
// 	background: -o-linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
// 	background: linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
// 	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=‘#1BBCC2’, endColorstr=‘#18A3A8’, GradientType=0);