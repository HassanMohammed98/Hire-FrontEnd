import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, VStack, useToast } from "native-base";
import authStore from "../../../stores/authStore";
import React, { useState } from "react";
import AuthButtons from "../../miniComponents/Buttons/AuthButtons";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    // loginType: "Hire-APP",
  });
  const toast = useToast();
  return (
    <View style={styles.layout}>
      <VStack space={6} style={{ marginTop: 6 }}>
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
        <Text
          onPress={() => {
            navigation.navigate("ResetPassword");
          }}
        >
          Forgot Password?
        </Text>
      </VStack>
      {/* <Button
        onPress={() => {
          authStore.signin(user, navigation, toast);
          // setStep(step + 1);
          // console.log("test");
        }}
      >

        NEXT
      </Button> */}
      <AuthButtons
        navigation={navigation}
        // screen={"RegisterCompany"}
        // params={{ type: "Company" }}
        props={{ user: user, toast: toast }}
        action={authStore.signin}
        text={"SIGN IN"}
        Width={"73.4%"}
      />

//         Sign IN
//       </Button>

    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flex: 1,
    // backgroundColor: "white",
    flexDirection: "column",
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
