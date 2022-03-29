import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import authStore from "../../stores/authStore";
import { Center, HStack, Image, Pressable, VStack } from "native-base";
import userStore from "../../stores/userStore";
import { baseURL } from "../../stores/instance";

const ChatLogs = ({ navigation }) => {
  // console.log("all Saad chats", authStore.ownerChats);
  const chats = authStore.userOwner.chats.map((chat) => {
    if (authStore.userOwner.signUpAs === "JobSeeker") {
      const otherEnd = userStore.users.find(
        (user) => user._id === chat.companyID
      );
      // console.log("all users hassan test", userStore.users);
      // console.log("chat detail", chat);
      console.log(otherEnd);
      if (otherEnd.picture.length > 1) {
        return (
          <Pressable
            key={chat._id}
            onPress={() => {
              navigation.navigate("ChatHistory", { chat: chat });
            }}
          >
            <HStack h={100} w={"90%"} style={styles.singleChat}>
              <Image
                style={{
                  width: "25%",
                  aspectRatio: 1,
                  zIndex: -1,
                  borderRadius: 100,
                }}
                alt="Company Profile Image"
                source={{ uri: baseURL + otherEnd.picture }}
              />
              <VStack style={styles.chatDetails}>
                <Text style={styles.chatName}>{otherEnd.username}</Text>
                <Text>hello</Text>
              </VStack>
              <VStack style={styles.singleChatRight}></VStack>
            </HStack>
          </Pressable>
        );
      } else {
        return (
          <Pressable
            key={chat._id}
            onPress={() => {
              navigation.navigate("ChatHistory", { chat: chat });
            }}
          >
            <HStack h={100} w={"90%"} key={chat._id} style={styles.singleChat}>
              <Image
                key={chat._id}
                style={{
                  width: "25%",
                  aspectRatio: 1,
                  zIndex: -1,
                }}
                alt="Company Profile Image"
                source={require("../../assets/CompanyProfile.png")}
              />
              <VStack style={styles.chatDetails}>
                <Text style={styles.chatName}>{otherEnd.username}</Text>
                <Text>bye</Text>
              </VStack>
              <VStack style={styles.singleChatRight}></VStack>
            </HStack>
          </Pressable>
        );
      }
    } else {
      const otherEnd = userStore.users.find(
        (user) => user._id === chat.jobSeekerID
      );
      // console.log("all users hassan test", userStore.users);
      // console.log("chat detail", chat);
      console.log(otherEnd);
      if (otherEnd.picture.length > 1) {
        return (
          <Pressable
            key={chat._id}
            onPress={() => {
              navigation.navigate("ChatHistory", { chat: chat });
            }}
          >
            <HStack h={100} w={"90%"} style={styles.singleChat}>
              <Image
                style={{
                  width: "25%",
                  aspectRatio: 1,
                  zIndex: -1,
                  borderRadius: 100,
                }}
                alt="JobSeeker Profile Image"
                source={{ uri: baseURL + otherEnd.picture }}
              />
              <VStack style={styles.chatDetails}>
                <Text style={styles.chatName}>{otherEnd.username}</Text>
                <Text>hello</Text>
              </VStack>
              <VStack style={styles.singleChatRight}></VStack>
            </HStack>
          </Pressable>
        );
      } else {
        return (
          <Pressable
            key={chat._id}
            onPress={() => {
              navigation.navigate("ChatHistory", { chat: chat });
            }}
          >
            <HStack h={100} w={"90%"} key={chat._id} style={styles.singleChat}>
              <Image
                key={chat._id}
                style={{
                  width: "25%",
                  aspectRatio: 1,
                  zIndex: -1,
                }}
                alt="JobSeeker Profile Image"
                source={require("../../assets/userProfile.png")}
              />
              <VStack style={styles.chatDetails}>
                <Text style={styles.chatName}>{otherEnd.username}</Text>
                <Text>bye</Text>
              </VStack>
              <VStack style={styles.singleChatRight}></VStack>
            </HStack>
          </Pressable>
        );
      }
    }
  });

  if (authStore.userOwner.chats === 0) {
    return (
      <View style={styles.screen}>
        <Text style={{ fontFamily: "Righteous_400Regular", fontSize: 15 }}>
          No Chats found
        </Text>
      </View>
    );
  } else {
    return (
      <VStack style={styles.chat}>
        {/* <Text>hello</Text> */}
        {chats}
      </VStack>
    );
  }
};

export default ChatLogs;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chat: {
    marginTop: 20,
    width: "100%",
    // borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    // height: 100,
    // flex: 1,
  },
  singleChat: {
    // borderWidth: 2,
    // borderColor: "red",
    position: "relative",
    alignItems: "center",
  },
  chatDetails: {
    // borderWidth: 2,
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  chatName: {
    fontFamily: "Righteous_400Regular",
    textAlign: "left",
    // marginTop: -5,
    textAlignVertical: "center",
    fontSize: 25,
  },
  singleChatRight: { width: "12%" },
});
