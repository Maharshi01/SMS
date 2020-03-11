import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Campaigns from './Campaigns';
import SendSMS from './SendSMS';
import Templates from './Templates';
const Stack = createStackNavigator();

const AppNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainPage"
        options={{
          title: 'SMS APP',
          headerTitleAlign:'center',
          headerTintColor:"blue"
          }}
        component={SendSMS}
      />
      <Stack.Screen 
        name="Campaigns"
        options={{
        title: 'Campaigns',
        headerTitleAlign:'center',
        headerTintColor:"red"

        }}
        component={Campaigns}
       />
      <Stack.Screen 
        name="Templates"
        options={{
          title: 'Templates',
          headerTitleAlign:'center',
          headerTintColor:"green"
          }}
        component={Templates}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator

