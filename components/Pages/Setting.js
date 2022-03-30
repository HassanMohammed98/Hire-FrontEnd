import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import { Button, Row, ScrollView, useToast, VStack } from "native-base";
import authStore from "../../stores/authStore";
import ScreenHeader from "../miniComponents/Header/ScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const Setting = ({ navigation }) => {
  const toast = useToast();
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader owner={authStore.userOwner} navigation={navigation} />
      <View>
        <AuthButtons
          action={() => {
            navigation.navigate("Account");
          }}
          text={"Account"}
          Width={"80%"}
        />
        <AuthButtons
          action={() => {
            navigation.navigate("profile");
          }}
          text={"Profile"}
          Width={"80%"}
        />
        <AuthButtons
          action={() => {
            authStore.signout(toast, navigation);
          }}
          text={"SIGN OUT"}
          Width={"80%"}
        />
        {/* <Button
        style={styles.button}
        onPress={() => {
          authStore.signout(toast, navigation);
        }}
      >
        SIGN OUT
      </Button> */}
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
