import { StyleSheet, Text, View } from "react-native";
import { Button, useToast } from "native-base";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";

import React from "react";

const EditProfile = ({ navigation }) => {
  const toast = useToast();

  const test = userStore.users.filter((foundUser) => {
    foundUser._id == authStore.user._id;
  });

  console.log("saad Testing getOwner", test);
  // console.log("saad Testing getOwner", userStore.users);
  return (
    <View style={styles.layout}>
      <Text>EditProfile</Text>
      <Button
        onPress={() => {
          authStore.signout(toast, navigation);
        }}
      >
        SIGN OUT
      </Button>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flex: 1,
    // backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
