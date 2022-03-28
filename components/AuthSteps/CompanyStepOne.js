import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Image, useToast, VStack } from "native-base";
import React, { useState } from "react";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import AddViewImage from "../miniComponents/Buttons/AddViewImage";

const CompanyStepOne = ({ setStep, step, setUser, user }) => {
  const toast = useToast();
  const [confirm, setConfirm] = useState("");

  const check = () => {
    if (confirm === user.password) {
      setStep();
    } else {
      toast.show({
        description: "Password Does Not Match!",
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
