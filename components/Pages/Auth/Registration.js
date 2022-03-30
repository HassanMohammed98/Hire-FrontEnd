import { StyleSheet, Text, View } from "react-native";
import { Button, VStack } from "native-base";
import AuthButtons from "../../miniComponents/Buttons/AuthButtons";
import React from "react";
import SignInDiv from "../../miniComponents/SVG/SignInDiv";
import Logo from "../../miniComponents/SVG/Logo";
import { socket } from "../../../stores/instance";

const Registration = ({ navigation }) => {
  return (
    <View style={styles.layout}>
      {/* <Button
        onPress={() => {
          // navigation.navigate("TripDetail", { trip: trip });
          navigation.navigate("RegisterCompany", { type: "Company" });
        }}
      >
        SIGN UP as an Employer
      </Button> */}
      {/* <VStack style={{ borderColor: "black", borderWidth: 1 }}> */}
      <Logo height={"41.68%"} />
      <VStack h={"13.28%"} style={styles.signUpButtons}>
        <AuthButtons
          navigation={navigation}
          screen={"RegisterCompany"}
          params={{ type: "Company" }}
          text={"SIGN UP as an Employer"}
          Width={"73.4%"}
        />

        {/* <Button
        onPress={() => {
          navigation.navigate("RegisterCompany", { type: "JobSeeker" });
        }}
      >
        SIGN UP as a Job Seeker
      </Button> */}
        <AuthButtons
          navigation={navigation}
          screen={"RegisterCompany"}
          params={{ type: "JobSeeker" }}
          text={"SIGN UP as a Job Seeker"}
          Width={"73.4%"}
        />
      </VStack>
      {/* </VStack> */}
      {/* <Button
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        SIGN IN Here
      </Button> */}
      <VStack space={5} style={styles.bottom}>
        <SignInDiv />
        <AuthButtons
          navigation={navigation}
          screen={"SignIn"}
          // params={{ type: "JobSeeker" }}
          text={"SIGN IN"}
          Width={"27.57%"}
        />
      </VStack>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    // justifyContent: "space-evenly",
  },
  signUpButtons: {
    // borderColor: "black",
    // borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  bottom: {
    flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
