import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigations/MainStack";
import { AuthStack } from "./src/navigations/AuthStack";

export default function App() {
  const loggedIn = false;
  return <NavigationContainer>
    {loggedIn ? <MainStack /> : <AuthStack />}
  </NavigationContainer>;
}