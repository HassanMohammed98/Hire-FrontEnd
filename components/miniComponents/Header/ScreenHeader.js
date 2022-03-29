import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "native-base";
import { FontAwesomeIcon } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ScreenHeader = ({ navigation }) => {
  return (
    <HStack style={styles.header} h={120} w={"100%"}>
      {/* <Image
        style={styles.editProfileIcon}
        alt="editProfileIcon"
        source={require("../../../assets/editProfile.png")}
      /> */}
      {/* <FontAwesomeIcon icon="fa-light fa-user-gear" size={50} /> */}
      {/* <FontAwesome5
        name="user-cog"
        size={50}
        color="black"
        style={styles.editProfileIcon}
      /> */}
      {/* <FontAwesome5
        name="user"
        size={50}
        color="black"
        style={styles.editProfileIcon}
      /> */}
      {/* <FontAwesome5
        name="users-cog"
        size={50}
        color="gray"
        style={styles.editProfileIcon}
      /> */}
      <Ionicons
        name="person-outline"
        size={50}
        color="black"
        style={styles.editProfileIcon}
        onPress={() => {
          navigation.navigate("setting");
        }}
      />

      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={styles.headerLogo}
          alt="headerLogo"
          source={require("../../../assets/hireLogo.png")}
        />
      </Pressable>
      <Ionicons
        name="chatbubbles-outline"
        size={50}
        color="black"
        onPress={() => {
          navigation.navigate("ChatLogs");
        }}
      />
    </HStack>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // height: 120,
    // width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
  headerLogo: {
    // flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    // aspectRatio: 1,
    width: "30%",
    aspectRatio: 1,
    marginRight: 60,
    marginLeft: 60,
  },
  chatIcon: {
    // flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    // aspectRatio: 1,
    width: "15%",
    aspectRatio: 1,
    // marginRight: 14,
  },
  editProfileIcon: {
    // flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    // aspectRatio: 1,
    width: "15%",
    aspectRatio: 1,
    marginLeft: 15,
  },
});
