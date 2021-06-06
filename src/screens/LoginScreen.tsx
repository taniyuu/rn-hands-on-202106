import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";


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

export const LoginScreen = () => {
    const navigation =useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    return (
      <SafeAreaView style={styles.flex}>
        <View style={[styles.flex, styles.paddingLarge]}>
          <Title style={styles.marginBottom}>ログイン</Title>
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
            onPress={() => {}} // TODO: 仮の値を入れている
          >
            ログイン
          </Button>
          <Button
            style={[styles.paddingSm, styles.marginBottom]}
            onPress={() => {navigation.navigate("SignUp")}} // TODO: 仮の値を入れている
          >
            アカウントを作成する
          </Button>
        </View>
      </SafeAreaView>
    );
  };