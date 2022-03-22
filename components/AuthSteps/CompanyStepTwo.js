import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, VStack, useToast } from "native-base";
import authStore from "../../stores/authStore";
import React from "react";

const CompanyStepTwo = ({ setStep, step, setUser, user, navigation }) => {
  const toast = useToast();
  return (
    <View>
      <TextInput
        style={styles.textInputName}
        // onChangeText={(name) => setTrip({ ...trip, name })}
        placeholder="Looking For..."
      />
      <TextInput
        style={styles.textInputName}
        // onChangeText={(name) => setTrip({ ...trip, name })}
        placeholder="Languages eg.'English', 'Arabic'..."
      />
      <VStack space={3} style={{ marginTop: 6 }}>
        <Button
          onPress={() => {
            // setStep(step + 1);
            // console.log("test");
            authStore.signup(user, toast, navigation);
          }}
        >
          NEXT
        </Button>
        <Button
          onPress={() => {
            setStep(step - 1);
          }}
        >
          BACK
        </Button>
      </VStack>
    </View>
  );
};

export default CompanyStepTwo;

const styles = StyleSheet.create({
  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
});
