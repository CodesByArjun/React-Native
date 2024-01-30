import { View, Text } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';



export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
  // Feed:{sort:'latest'|'top'}|undefined;
};

const stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Trending Products"
          }}

        />
        <stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Product Details"
          }}

        />


      </stack.Navigator>
    </NavigationContainer>
  )
}