import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, useToast, VStack } from "native-base";
import React, { useState } from "react";
import companyStore from "../../stores/companyStore";

const CompanySetupOne = ({ navigation }) => {
  const toast = useToast();
  // let confirm = "";
  const [editUser, setEditUser] = useState({
    type: "",
    founders: "",
    yearEstablished: 0,
    size: "",
    about: "",
  });
  return (
    <View>
      <VStack space={3}>
        <TextInput
          style={styles.textInputName}
          onChangeText={(type) => {
            setEditUser({ ...editUser, type });
          }}
          placeholder="Type"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(founders) => setEditUser({ ...editUser, founders })}
          placeholder="Founders"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(yearEstablished) =>
            setEditUser({ ...editUser, yearEstablished })
          }
          placeholder="Year Established"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(size) => setEditUser({ ...editUser, size })}
          placeholder="Size"
        />
        <TextInput
          style={styles.textInputName}
          onChangeText={(about) => setEditUser({ ...editUser, about })}
          placeholder="About (brief Description)"
        />
      </VStack>
      <Button
        onPress={() => {
          console.log(editUser);
          companyStore.createCompany(editUser, navigation);
          //   navigation.navigate("Home");
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

export default CompanySetupOne;

const styles = StyleSheet.create({
  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
});
