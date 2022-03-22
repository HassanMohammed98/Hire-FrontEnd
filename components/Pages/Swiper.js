import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import React from "react";
import authStore from "../../stores/authStore";

const Swiper = ({ navigation }) => {
  return (
    <View style={styles.layout}>
      <Text>Swiper</Text>
      {authStore.user && <Text>{authStore.user.username}</Text>}

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

export default Swiper;

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
