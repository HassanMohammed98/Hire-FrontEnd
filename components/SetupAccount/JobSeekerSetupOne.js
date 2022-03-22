import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, HStack, useToast, VStack } from "native-base";
import React, { useState } from "react";

const JobSeekerSetupOne = () => {
  const toast = useToast();
  // let confirm = "";
  const [editUser, setEditUser] = useState({
    prefix: "",
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    // education: "",
    // experience: "",
    skils: "",
  });
  return (
    <View>
      <VStack space={3}>
        <HStack>
          <TextInput
            style={styles.textInputName}
            onChangeText={(prefix) => {
              setEditUser({ ...editUser, prefix });
            }}
            placeholder="Prefix"
          />
          <TextInput
            style={styles.textInputName}
            onChangeText={(firstname) => {
              setEditUser({ ...editUser, firstname });
            }}
            placeholder="First Name"
          />
          <TextInput
            style={styles.textInputName}
            onChangeText={(lastname) => {
              setEditUser({ ...editUser, lastname });
            }}
            placeholder="Last Name"
          />
        </HStack>
        <TextInput
          style={styles.textInputName}
          onChangeText={(gender) => setEditUser({ ...editUser, gender })}
          placeholder="Gender"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(phone) => {
            setEditUser({ ...editUser, phone });
          }}
          placeholder="Phone"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(skils) => setEditUser({ ...editUser, skils })}
          placeholder="Skils"
        />
      </VStack>
      <Button
        onPress={() => {
          console.log(editUser);
          navigation.navigate("Home");

          // user.password === confirm?
          //   setStep(step + 1);
          toast.show({
            description: "Account Setup Done",
          });
        }}
      >
        Skip
      </Button>
    </View>
  );
};

export default JobSeekerSetupOne;

const styles = StyleSheet.create({
  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
});
