import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import authStore from "../../stores/authStore";
import { Center, HStack, Image, Pressable, VStack } from "native-base";
import userStore from "../../stores/userStore";
import { baseURL } from "../../stores/instance";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../miniComponents/Header/ScreenHeader";
import ChatList from "../miniComponents/chat/ChatList";
import messageStore from "../../stores/chatStore";

const ChatLogs = ({ navigation }) => {
  // useEffect(async () => {
  //   await authStore.getOwner();
  //   await messageStore.getMessages();
  // }, []);
  const chats = authStore.userOwner.chats.map((chat) => {
    if (authStore.userOwner.signUpAs === "JobSeeker") {
      const otherEnd = userStore.users.find((user) => {
        return user._id === chat.companyID;
      });
      // console.log(
      //   "==--=-=-=-=-=-=-=-=-==",
      //   chat.messages[chat.messages.length - 1]
      // );
      return (
        <ChatList
          last={chat.messages[chat.messages.length - 1]}
          search={"Company"}
          key={chat._id}
          otherEnd={otherEnd}
          navigation={navigation}
          chat={chat}
        />
      );
    } else {
      const otherEnd = userStore.users.find((user) => {
        return user._id === chat.jobSeekerID;
      });
      return (
        <ChatList
          last={chat.messages[chat.messages.length - 1]}
          search={"JobSeeker"}
          key={chat._id}
          otherEnd={otherEnd}
          navigation={navigation}
          chat={chat}
        />
      );
    }
  });

  if (authStore.userOwner.chats === 0) {
    return (
      <SafeAreaView style={styles.screen}>
        <ScreenHeader owner={authStore.userOwner} navigation={navigation} />
        <View style={styles.chatList}>
          <Text style={{ fontFamily: "Righteous_400Regular", fontSize: 15 }}>
            No Chats found
          </Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.screen}>
        <ScreenHeader owner={authStore.userOwner} navigation={navigation} />
        <VStack style={styles.chat}>
          {/* <Text>hello</Text> */}
          {chats}
        </VStack>
      </SafeAreaView>
    );
  }
};

export default observer(ChatLogs);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    // borderWidth: 4,
  },
  chatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chat: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
