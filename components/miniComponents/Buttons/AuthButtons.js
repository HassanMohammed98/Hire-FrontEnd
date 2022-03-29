import { StyleSheet, Text, View } from "react-native";
import { Button, useToast } from "native-base";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

const AuthButtons = ({
  text,
  Width,
  navigation,
  screen,
  params,
  action,
  props,
  plainAction,
  outLine,
}) => {
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.layout}>
      <Button
        onPress={() => {
          {
            action && action();
            plainAction && plainAction();
            params && navigation
              ? navigation.navigate(screen, params)
              : navigation && navigation.navigate(screen);
          }
        }}
        style={
          outLine
            ? {
                borderColor: "rgb(240, 84, 84)",
                borderWidth: 1,
                backgroundColor: "rgb(245, 245, 245)",
                backgroundColor: "white",
                width: Width,
                height: "100%",
                borderRadius: 24.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                backgroundColor: "rgb(240, 84, 84)",
                width: Width,
                height: "100%",
                borderRadius: 24.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
        }
        _text={
          outLine
            ? {
                color: "rgb(240, 84, 84)",
                //   fontWeight: "bold",
                textAlign: "center",
                fontSize: 15,
                fontFamily: "Righteous_400Regular",
              }
            : {
                color: "rgb(245, 245, 245)",
                //   fontWeight: "bold",
                textAlign: "center",
                fontSize: 15,
                fontFamily: "Righteous_400Regular",
              }
        }
      >
        {text}
      </Button>
    </View>
  );
};

export default AuthButtons;
const styles = StyleSheet.create({
  layout: {
    width: "100%",
    // borderColor: "red",
    // borderWidth: 2,
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
