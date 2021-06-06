import * as React from "react";
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return <Stack.Navigator >
      <Stack.Screen name="Hoge" component={()=> <View/>}/>
  </Stack.Navigator>;
};