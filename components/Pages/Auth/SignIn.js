import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, VStack, useToast, HStack } from "native-base";
import authStore from "../../../stores/authStore";
import React, { useState } from "react";
import AuthButtons from "../../miniComponents/Buttons/AuthButtons";
import AuthHeading from "../../miniComponents/Header/AuthHeading";
import SignUpDiv from "../../miniComponents/SVG/SignUpDiv";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    // loginType: "Hire-APP",
  });
  const toast = useToast();
  const signin = () => {
    if (user.username.length > 1 && user.password.length > 1) {
      authStore.signin(user, navigation, toast);
    } else if (user.username.length === 0 && user.password.length === 0) {
      toast.show({
        description: "Username & Password Missing",
      });
    } else if (user.username.length === 0) {
      toast.show({
        description: "Username Missing",
      });
    } else {
      toast.show({
        description: "Password Missing",
      });
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.layout}>
        <AuthHeading
          title={"SIGN IN"}
          size={27.4}
          marginLeft={"-1.87%"}
          color={"black"}
        />
        <VStack space={10}>
          <VStack style={{ marginTop: 6 }} space={1.5}>
            <VStack space={6}>
              <TextInput
                style={styles.textInputName}
                onChangeText={(username) => setUser({ ...user, username })}
                placeholder="UserName"
              />
              <TextInput
                style={styles.textInputName}
                onChangeText={(password) => setUser({ ...user, password })}
                placeholder="Password"
                // secureTextEntry={true}
              />
            </VStack>
            <View style={styles.forgot}>
              <AuthHeading
                marginLeft={0}
                title={"Forgot Password?"}
                size={12.5}
                navigation={navigation}
                screen={"ResetPassword"}
                color={"rgb(48, 71, 94)"}
              />
            </View>
          </VStack>
          <AuthButtons action={signin} text={"SIGN IN"} Width={"100%"} />
        </VStack>
        <View style={styles.footer}>
          <SignUpDiv />
          <HStack>
            <AuthHeading
              title={"Dont have an Account?"}
              size={12.5}
              marginLeft={0}
              color={"black"}
            />
            <AuthHeading
              title={"Sign UP"}
              size={12.5}
              navigation={navigation}
              screen={"Registration"}
              marginLeft={5}
              color={"rgb(48, 71, 94)"}
            />
            {/* <Text
              onPress={() => {
                navigation.navigate("Registration");
              }}
            >
              Sign UP
            </Text> */}
          </HStack>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // borderColor: "black",
    // borderWidth: 10,
  },
  layout: {
    height: "79.4%",
    width: "73.4%",
    display: "flex",
    // flex: 1,
    // backgroundColor: "white",
    // borderColor: "black",
    // borderWidth: 2,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
  forgot: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  footer: {
    height: "28.78%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
