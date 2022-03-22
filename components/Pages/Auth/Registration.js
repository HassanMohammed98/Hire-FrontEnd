import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import React from "react";

const Registration = ({ navigation }) => {
  return (
    <View style={styles.layout}>
      <Text>Registration</Text>
      <Button
        onPress={() => {
          // navigation.navigate("TripDetail", { trip: trip });
          navigation.navigate("RegisterCompany");
        }}
      >
        SIGN UP as an Employer
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("RegisterJobseeker");
        }}
      >
        SIGN UP as a Job Seeker
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        SIGN IN Here
      </Button>
    </View>
  );
};

export default Registration;

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
