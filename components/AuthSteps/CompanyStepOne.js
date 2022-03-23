import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Flex, useToast } from "native-base";
import React from "react";

const CompanyStepOne = ({ setStep, step, setUser, user }) => {
  const toast = useToast();
  // let confirm = "";
  return (
    <View>
      <View
        style={{
          width: "100%",
          borderColor: "black",
          borderWidth: 1,
          display: "flex",
          alignItems: "center",
          marginBottom: 50,
          // justifyContent: ,
        }}
      >
        <View style={styles.imageBox}>
          <View style={styles.addbutton}></View>
        </View>
      </View>
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

  imageBox: {
    padding: 10,
    borderColor: "black",
    position: "relative",
    borderWidth: 1,
    height: 169,
    aspectRatio: 1,
    borderRadius: 85,
  },
  addbutton: {
    height: 50,
    aspectRatio: 1,
    borderColor: "black",
    position: "absolute",
    borderWidth: 1,
    borderRadius: 25,
    bottom: 0,
    right: 7,
    backgroundColor: "red",
  },
});
