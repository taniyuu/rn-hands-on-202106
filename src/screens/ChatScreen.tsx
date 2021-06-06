import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { GiftedChat,IMessage } from "react-native-gifted-chat";
import { useNavigation } from "@react-navigation/core";
import { Button } from "react-native-paper";
import { auth } from "../../firebase";

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export const ChatScreen=()=> {
    const navigation = useNavigation();
    const signOut = () => {
      auth
        .signOut()
        .then(() => {
          console.log("Sign out success!");
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <Button onPress={signOut}>ログアウト</Button>,
        });
      }, []);

  // 表示するチャットメッセージの配列
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = React.useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        placeholder="メッセージを入力してください..."
        onSend={onSend}
        user={{
          _id: 1,
          name: "Me",
          avatar: "https://placeimg.com/140/140/any",
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
