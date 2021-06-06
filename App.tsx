import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigations/MainStack";

export default function App() {
  return <NavigationContainer><MainStack/></NavigationContainer>;
}