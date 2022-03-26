import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

const AuthHeading = ({
  title,
  size,
  action,
  navigation,
  screen,
  marginLeft,
  color,
}) => {
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text
      style={{
        // color: "rgb(245, 245, 245)",
        //   fontWeight: "bold",
        fontSize: size,
        marginLeft: marginLeft,
        fontFamily: "Righteous_400Regular",
        color: color,
      }}
      onPress={() => {
        {
          screen && navigation.navigate(screen);
          //   action
          //     ? action(props.user, navigation, props.toast)
          //     : params
          //     ? navigation.navigate(screen, params)
          //     : navigation.navigate(screen);
        }
      }}
    >
      {title}
    </Text>
  );
};

export default AuthHeading;

const styles = StyleSheet.create({});
