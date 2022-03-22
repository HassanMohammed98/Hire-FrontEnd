import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, useToast } from "native-base";
import React from "react";

const CompanyStepOne = ({ setStep, step, setUser, user }) => {
  const toast = useToast();
  // let confirm = "";
  return (
    <View>
      <TextInput
        style={styles.textInputName}
        onChangeText={(picture) => {
          setUser({ ...user, picture });
        }}
        placeholder="Picture"
      />
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
      {/* <TextInput
        style={styles.textInputName}
        onChangeText={(check) => (confirm = check)}
        placeholder="Confirm Password"
      /> */}
      <TextInput
        style={styles.textInputName}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
      />
      <Button
        onPress={() => {
          console.log(user);
          // user.password === confirm?
          setStep(step + 1);
          // : toast.show({
          //     description: "Password Does Not Match!",
          //   });
        }}
      >
        NEXT
      </Button>
    </View>
  );
};

export default CompanyStepOne;

const styles = StyleSheet.create({
  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
});
