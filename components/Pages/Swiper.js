import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import React from "react";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import { observer } from "mobx-react";

const Swiper = ({ navigation }) => {
  // if (authStore.user) {
  //   // let users = userStore.getUsers();
  //   // userStore.users
  // }
  const users = userStore.users.map((user) => (
    <View>
      <Text>{user.signUpAs}</Text>
      <Text>{user.username}</Text>
      <Text>{user.picture}</Text>
    </View>
  ));
  console.log(userStore.users);
  return (
    <View style={styles.layout}>
      <Text>Swiper</Text>
      {authStore.user && <Text>{authStore.user.username}</Text>}
      {/* <Text>{userStore.users[0].signUpAs}</Text> */}
      <View>{users}</View>
      <Button
        onPress={() => {
          // navigation.navigate("TripDetail", { trip: trip });
          navigation.navigate("ChatLogs");
        }}
      >
        View Chat Log
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        View Employee / Company CV
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        Edit Profile
      </Button>
    </View>
  );
};

export default observer(Swiper);

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
