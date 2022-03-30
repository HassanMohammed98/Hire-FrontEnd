import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { baseURL } from "../../../stores/instance";
import { Center, HStack, Image, Pressable, VStack } from "native-base";
import messageStore from "../../../stores/chatStore";

const ChatList = ({ otherEnd, navigation, chat, search, last }) => {
  let time;
  if (last) {
    last = messageStore.messages.find((message) => message._id === last);
    console.log("last message for now...", last);
    time = last.updatedAt.split("T");
    time = time[1].split(":");
  }
  if (otherEnd.picture.length > 1) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("ChatHistory", { chat: chat });
        }}
      >
        <HStack w={"90%"} style={styles.singleChat}>
          <Image
            style={{
              width: "17%",
              aspectRatio: 1,
              zIndex: -1,
              borderRadius: 100,
            }}
            alt="Company Profile Image"
            source={{ uri: baseURL + otherEnd.picture }}
          />
          <VStack style={styles.chatDetails}>
            <Text style={styles.chatName}>{otherEnd.username}</Text>
            <Text>{last && last.message}</Text>
          </VStack>
          <VStack style={styles.singleChatRight}>
            <Text>{last && `${time[0]}:${time[1]}`}</Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("ChatHistory", { chat: chat });
        }}
      >
        <HStack w={"90%"} key={chat._id} style={styles.singleChat}>
          <Image
            key={chat._id}
            style={{
              width: "17%",
              aspectRatio: 1,
              zIndex: -1,
            }}
            alt={
              search === "Company"
                ? "Company Profile Image"
                : "JobSeeker Profile Image"
            }
            source={
              search === "Company"
                ? require("../../../assets/CompanyProfile.png")
                : require("../../../assets/userProfile.png")
            }
          />
          <VStack style={styles.chatDetails}>
            <Text style={styles.chatName}>{otherEnd.username}</Text>
            <Text>{last && last.message}</Text>
          </VStack>
          <VStack style={styles.singleChatRight}>
            <Text>{last && `${time[0]}:${time[1]}`}</Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  }
};

export default ChatList;

const styles = StyleSheet.create({
  singleChat: {
    // borderWidth: 2,
    // borderColor: "red",
    position: "relative",
    alignItems: "center",
    marginVertical: 4,
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
    fontSize: 17,
  },
  singleChatRight: { width: "12%", height: "78%" },
});
