import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import authStore from "../../stores/authStore";
import messageStore from "../../stores/chatStore";
import { HStack, ScrollView, VStack } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const ChatHistory = ({ navigation, route }) => {
  const { chat } = route.params;
  const [message, setMessage] = useState("");
  const handleMessage = () => {
    // console.log(message);
    // createMessage();
    if (message.length > 1) {
      messageStore.createMessage({ chat: chat._id, message: message });
    } else {
      console.log("message box empty");
    }
  };
  const ChatHistory = messageStore.messages
    .filter((message) => message.chat === chat._id)
    .map((singleMessage) => {
      if (singleMessage.sender !== authStore.userOwner._id) {
        console.log(singleMessage);
        return (
          <HStack
            w={"100%"}
            key={singleMessage._id}
            style={{
              borderWidth: 1,
              borderColor: "green",
              // height: 120,
              paddingLeft: 10,
              paddingVertical: 10,
            }}
          >
            <VStack h={"100%"}>
              <View
                style={{
                  // flex: 0.4,
                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 20,
                  borderRadius: 19,
                  minHeight: 95,
                  width: 160,
                  backgroundColor: "#F5F5F5",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.message}>{singleMessage.message}</Text>
              </View>
              <Text style={{}}>{singleMessage.updatedAt}</Text>
            </VStack>
          </HStack>
        );
        //   </HStack>
      } else {
        return (
          <HStack
            w={"100%"}
            key={singleMessage._id}
            style={{
              borderWidth: 1,
              borderColor: "green",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              paddingRight: 10,
              paddingVertical: 10,
            }}
          >
            <VStack h={"100%"}>
              <View
                style={{
                  // flex: 0.4,

                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 20,
                  borderRadius: 19,
                  minHeight: 95,
                  width: 160,
                  backgroundColor: "rgba(48, 71, 94,0.7)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.messageOwner}>{singleMessage.message}</Text>
              </View>
              <Text style={{ fontSize: 12 }}>{singleMessage.updatedAt}</Text>
            </VStack>
          </HStack>
        );
      }
    });

  // console.log("This is the real deal", authStore.userOwner._id);
  // console.log("This is the real deal extreme", ChatHistory);

  if (ChatHistory.length === 0) {
    return (
      <View style={styles.screenEmpty}>
        <Text style={{ fontFamily: "Righteous_400Regular", fontSize: 15 }}>
          No Messages found
        </Text>
      </View>
    );
  } else {
    return (
      <VStack style={styles.screen}>
        <ScrollView style={{ borderWidth: 2 }}>
          {/* <Text>ChatHistoryfff</Text> */}
          {ChatHistory ? ChatHistory : <Text>No messages Found</Text>}
        </ScrollView>
        {/* <View
          style={{
            width: "91.355%",
            height: 50,
            backgroundColor: "red",
            marginVertical: 15,
            borderRadius: 30,
          }}
        ></View> */}
        <HStack style={styles.chatBox}>
          <TextInput
            style={{ flex: 0.98, borderWidth: 2 }}
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

export default ChatHistory;

const styles = StyleSheet.create({
  screenEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
