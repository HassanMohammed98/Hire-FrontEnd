import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";

const AuthStages = ({ step }) => {
  return (
    <HStack style={styles.layout}>
      <View style={styles.stageDone}></View>
      <View
        style={step > 1 ? styles.splitLineDone : styles.splitLineYet}
      ></View>
      <View style={step > 1 ? styles.stageDone : styles.stageYet}></View>
      <View
        style={step > 2 ? styles.splitLineDone : styles.splitLineYet}
      ></View>
      <View style={step > 2 ? styles.stageDone : styles.stageYet}></View>
    </HStack>
  );
};

export default AuthStages;

const styles = StyleSheet.create({
  layout: {
    height: "100%",
    width: "34%",
    // borderColor: "green",
    // borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  splitLineDone: {
    width: "24%",
    height: "15%",
    backgroundColor: "red",
  },
  splitLineYet: {
    width: "24%",
    height: "15%",
    backgroundColor: "#C4C4C4",
  },
  stageDone: {
    // width: "17.5%",
    height: "100%",
    aspectRatio: 1,
    // borderColor: "red",
    // borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "red",
    zIndex: 2,
  },
  stageYet: {
    // width: "17.5%",
    height: "100%",
    aspectRatio: 1,
    // borderColor: "red",
    // borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#C4C4C4",
    zIndex: 2,
  },
});
