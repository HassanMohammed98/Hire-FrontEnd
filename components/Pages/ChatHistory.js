import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import authStore from "../../stores/authStore";
import messageStore from "../../stores/chatStore";
import { HStack, ScrollView, VStack } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import ChatBubble from "../miniComponents/chat/ChatBubble";
import { socket } from "../../stores/instance";
import { observer } from "mobx-react";

const ChatHistory = ({ navigation, route }) => {
  const { chat } = route.params;
  const [message, setMessage] = useState("");
  const handleMessage = () => {
    if (message.length > 1) {
      messageStore.createMessage({ chat: chat._id, message: message });
      socket.emit("backendChat", "hi");
    } else {
      console.log("message box empty");
    }
  };
  console.log(
    "==--=-=-=-=-=-=-=-=-==",
    chat.messages[chat.messages.length - 1]
  );
  // const messagesEndRef = useRef(null);
  // useEffect(() => {
  //   messagesEndRef.scrollTo({
  //     x: 0,
  //     y: 300,
  //     animated: true,
  //   });
  //   console.log("hello");
  // }, [messageStore.messages]);
  const ChatHistory = messageStore.messages
    .filter((message) => message.chat === chat._id)
    .map((singleMessage) => {
      if (singleMessage.sender !== authStore.userOwner._id) {
        return (
          <View
            key={singleMessage._id}
            style={{
              alignItems: "flex-start",
              marginVertical: 7,
              marginHorizontal: 7,
            }}
          >
            <ChatBubble
              align={"flex-start"}
              text={"black"}
              color={"#F5F5F5"}
              message={singleMessage.message}
              updatedAt={singleMessage.updatedAt}
            />
          </View>
        );
      } else {
        return (
          <View
            key={singleMessage._id}
            style={{
              alignItems: "flex-end",
              marginVertical: 7,
              marginHorizontal: 7,
            }}
          >
            <ChatBubble
              align={"flex-end"}
              text={"#F5F5F5"}
              color={"rgba(48, 71, 94,0.7)"}
              message={singleMessage.message}
              updatedAt={singleMessage.updatedAt}
            />
          </View>
        );
      }
    });

  // console.log("This is the real deal", authStore.userOwner._id);
  // console.log("This is the real deal extreme", ChatHistory);

  if (ChatHistory.length === 0) {
    return (
      <VStack style={styles.screenEmpty}>
        <View style={styles.screenEmpty}>
          <Text style={{ fontFamily: "Righteous_400Regular", fontSize: 15 }}>
            No Messages found
          </Text>
        </View>
        <HStack style={styles.chatBox}>
          <TextInput
            style={{ flex: 0.98 }}
            // secureTextEntry={true}
            onChangeText={(newMessage) => {
              return setMessage(newMessage);
            }}
            placeholder="Messages"
          />

          <MaterialIcons
            name="send"
            size={25}
            onPress={() => handleMessage()}
            style={{
              backgroundColor: "rgba(48, 71, 94,0.7)",
              // borderWidth: 1,
              padding: 7,
              paddingLeft: 8.5,
              borderRadius: 70,
              height: "100%",
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            color="rgb(245, 245, 245)"
          />
        </HStack>
      </VStack>
    );
  } else {
    return (
      <VStack style={styles.screen}>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          {/* <Text>ChatHistoryfff</Text> */}
          {ChatHistory ? ChatHistory : <Text>No messages Found</Text>}
          {/* <View style={{ height: 5 }} ref={messagesEndRef}></View> */}
        </ScrollView>
        <HStack style={styles.chatBox}>
          <TextInput
            style={{ flex: 0.98 }}
            // secureTextEntry={true}
            onChangeText={(newMessage) => {
              return setMessage(newMessage);
            }}
            placeholder="Messages"
          />

          <MaterialIcons
            name="send"
            size={25}
            onPress={() => handleMessage()}
            style={{
              backgroundColor: "rgba(48, 71, 94,0.7)",
              // borderWidth: 1,
              padding: 7,
              paddingLeft: 8.5,
              borderRadius: 70,
              height: "100%",
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            color="rgb(245, 245, 245)"
          />
        </HStack>
      </VStack>
    );
  }
};

export default observer(ChatHistory);

const styles = StyleSheet.create({
  screenEmpty: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    // borderWidth: 5,
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
  },
  message: {
    fontSize: 27.4,
  },
  messageOwner: {
    fontSize: 27.4,
    color: "#F5F5F5",
  },
  chatBox: {
    // margin: 4,
    paddingLeft: 25,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "pink",
    // borderWidth: 1,
    // borderRadius: 20,
    backgroundColor: "rgb(225, 225, 225)",
    width: "91.355%",
    height: 50,
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 30,
    padding: 5,
  },
});
