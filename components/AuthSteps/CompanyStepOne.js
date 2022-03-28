import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Image, useToast, VStack } from "native-base";
import React, { useState } from "react";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import AddViewImage from "../miniComponents/Buttons/AddViewImage";
import userStore from "../../stores/userStore";

const CompanyStepOne = ({ setStep, step, setUser, user }) => {
  const toast = useToast();
  const [confirm, setConfirm] = useState("");

  const check = () => {
    if (
      user.username.length > 1 &&
      user.password.length > 1 &&
      user.email.length > 1
    ) {
      if (
        userStore.users.every(
          (Saveduser) =>
            Saveduser.username.toLowerCase().trim() !==
            user.username.toLowerCase().trim()
        ) &&
        userStore.users.every(
          (Saveduser) =>
            Saveduser.email.toLowerCase().trim() !==
            user.email.toLowerCase().trim()
        ) &&
        confirm === user.password
      ) {
        return setStep();
      } else {
        if (
          userStore.users.some(
            (Saveduser) =>
              Saveduser.username.toLowerCase().trim() ===
              user.username.toLowerCase().trim()
          )
        ) {
          toast.show({
            description: "Username is taken!",
          });
        }
        if (
          userStore.users.some(
            (Saveduser) =>
              Saveduser.email.toLowerCase().trim() ===
              user.email.toLowerCase().trim()
          )
        ) {
          toast.show({
            description: "Email is taken!",
          });
        }
        if (confirm !== user.password) {
          toast.show({
            description: "Password Does Not Match!",
          });
        }
      }
    } else {
      return toast.show({
        description: "Please check Missing Fields!",
      });
    }
  };

  return (
    <View style={styles.stepOne}>
      <AddViewImage setUser={setUser} user={user} />
      <VStack space={6} style={{ marginTop: 13, marginBottom: 13 }}>
        <TextInput
          style={styles.textInputName}
          onChangeText={(username) => setUser({ ...user, username })}
          placeholder="UserName"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(password) => setUser({ ...user, password })}
          placeholder="Password"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(check) => setConfirm(check)}
          placeholder="Confirm Password"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Email"
          autoComplete={"email"}
        />
      </VStack>
      <AuthButtons plainAction={check} text={"Continue"} Width={"100%"} />
    </View>
  );
};

export default CompanyStepOne;

const styles = StyleSheet.create({
  stepOne: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    justifyContent: "space-evenly",
  },
  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
});
