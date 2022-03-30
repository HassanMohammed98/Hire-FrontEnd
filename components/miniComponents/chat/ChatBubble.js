import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";

const ChatBubble = ({ message, updatedAt, color, text, align }) => {
  let time = updatedAt.split("T");
  time = time[1].split(":");
  //   console.log(time);
  return (
    <VStack style={{ alignItems: align }}>
      <HStack>
        <Text
          style={{
            padding: 10,
            paddingLeft: 15,
            paddingRight: 20,

            borderRadius: 15,
            backgroundColor: color,
            fontSize: 15,
            color: text,
            textAlign: "left",
          }}
        >
          {message}
        </Text>
      </HStack>
      <Text
        style={
          align === "flex-start"
            ? {
                fontSize: 9,
                position: "absolute",
                left: 0,
                bottom: -12,
              }
            : {
                fontSize: 9,
                position: "absolute",
                right: 0,
                bottom: -12,
              }
        }
      >{`${time[0]}:${time[1]}`}</Text>
    </VStack>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  message: {
    fontSize: 27.4,
  },
  messageOwner: {
    // display: "inline",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    backgroundColor: "rgba(48, 71, 94,0.7)",
    fontSize: 27.4,
    color: "#F5F5F5",
  },
});
