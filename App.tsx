import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigations/MainStack";
import { AuthStack } from "./src/navigations/AuthStack";
import { auth } from "./firebase";

export default function App() {
  const [loggedIn,setLoggedIn] = React.useState(false);
  React.useLayoutEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // ログイン中
        setLoggedIn(true);
      } else {
        // ログアウト中
        setLoggedIn(false);
      }
    });
    return unsubscribe; 
  },[]);

  return <NavigationContainer>
    {loggedIn ? <MainStack /> : <AuthStack />}
  </NavigationContainer>;
}