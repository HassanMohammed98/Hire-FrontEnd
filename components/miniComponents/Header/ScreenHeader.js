import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "native-base";
import { FontAwesomeIcon } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { baseURL } from "../../../stores/instance";
import messageStore from "../../../stores/chatStore";
import authStore from "../../../stores/authStore";

const ScreenHeader = ({ navigation, owner }) => {
  return (
    <HStack style={styles.headermain}>
      <TouchableOpacity
        style={styles.SLogo}
        onPress={() => {
          navigation.navigate("setting");
        }}
      >
        <Image
          style={styles.ImageLogo}
          source={{ uri: baseURL + owner.picture }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.HLogo}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={styles.headerLogo}
          alt="headerLogo"
          source={require("../../../assets/Hire-Logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.CLogo}
        onPress={async () => {
          await authStore.getOwner();
          await messageStore.getMessages();
          navigation.navigate("ChatLogs");
        }}
      >
        <Ionicons name="chatbubbles-sharp" size={40} />
      </TouchableOpacity>
    </HStack>
    // <HStack style={styles.header} w={"100%"}>
    //   {/* <Image
    //     style={styles.editProfileIcon}
    //     alt="editProfileIcon"
    //     source={require("../../../assets/editProfile.png")}
    //   /> */}
    //   {/* <FontAwesomeIcon icon="fa-light fa-user-gear" size={50} /> */}
    //   {/* <FontAwesome5
    //     name="user-cog"
    //     size={50}
    //     color="black"
    //     style={styles.editProfileIcon}
    //   /> */}
    //   {/* <FontAwesome5
    //     name="user"
    //     size={50}
    //     color="black"
    //     style={styles.editProfileIcon}
    //   /> */}
    //   {/* <FontAwesome5
    //     name="users-cog"
    //     size={50}
    //     color="gray"
    //     style={styles.editProfileIcon}
    //   /> */}
    //   <Ionicons
    //     name="person-outline"
    //     size={50}
    //     color="black"
    //     style={styles.editProfileIcon}
    //     onPress={() => {
    //       navigation.navigate("setting");
    //     }}
    //   />

    //   <Pressable
    //     onPress={() => {
    //       navigation.navigate("Home");
    //     }}
    //   >
    //     <Image
    //       style={styles.headerLogo}
    //       alt="headerLogo"
    //       source={require("../../../assets/hireLogo.png")}
    //     />
    //   </Pressable>
    //   <Ionicons
    //     name="chatbubbles-outline"
    //     size={50}
    //     color="black"
    //     onPress={() => {
    //       navigation.navigate("ChatLogs");
    //     }}
    //   />
    // </HStack>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headermain: {
    marginBottom: 10,
    width: "100%",
    height: 60,
    // borderWidth: 2,
    position: "relative",
  },
  ImageLogo: {
    width: 37,
    aspectRatio: 1,
    borderRadius: 20,
  },
  SLogo: {
    padding: 10,
    justifyContent: "center",
    width: "20%",
    // borderWidth: 2,
  },
  HLogo: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    width: "60%",
  },
  CLogo: {
    alignItems: "flex-end",
    padding: 7,
    width: "20%",
  },
  // header: {
  //   // flex: 1,
  //   // height: 120,
  //   // width: "100%",
  //   borderWidth: 1,
  //   borderColor: "red",
  // },
  // // headerLogo: {
  // //   // flex: 1,
  // //   // borderColor: "black",
  // //   // borderWidth: 1,
  // //   // aspectRatio: 1,
  // //   width: "30%",
  // //   aspectRatio: 1,
  // //   marginRight: 60,
  // //   marginLeft: 60,
  // // },
  // chatIcon: {
  //   // flex: 1,
  //   // borderColor: "black",
  //   // borderWidth: 1,
  //   // aspectRatio: 1,
  //   width: "15%",
  //   aspectRatio: 1,
  //   // marginRight: 14,
  // },
  // editProfileIcon: {
  //   // flex: 1,
  //   // borderColor: "black",
  //   // borderWidth: 1,
  //   // aspectRatio: 1,
  //   width: "15%",
  //   aspectRatio: 1,
  //   marginLeft: 15,
  // },
});
