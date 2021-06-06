import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";

import { auth } from "../../firebase";

const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    paddingLarge: {
      padding: 24,
    },
    marginBottom: {
      marginBottom: 16,
    },
    paddingSm: {
      padding: 8,
    },
  });

export const SignUpScreen = () => {
  const navigation =useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
const signUp=()=>{
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log("Register Success!");
  })
  .catch((error) => {
    console.error(error.message);
  });
}

    return (
      <SafeAreaView style={styles.flex}>
        <View style={[styles.flex, styles.paddingLarge]}>
          <Title style={styles.marginBottom}>新規登録</Title>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.marginBottom}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.marginBottom}
          />
          <Button
            mode="contained"
            style={[styles.paddingSm, styles.marginBottom]}
            onPress={signUp} // TODO: 仮の値を入れている
          >
            新規登録
          </Button>
          <Button
            style={[styles.paddingSm, styles.marginBottom]}
            onPress={() => {navigation.navigate("Login")}} // TODO: 仮の値を入れている
          >
            既存のアカウントでログインする
          </Button>
        </View>
      </SafeAreaView>
    );
  };