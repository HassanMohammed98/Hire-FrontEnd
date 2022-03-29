import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  Button,
  VStack,
  useToast,
  ScrollView,
  HStack,
  Pressable,
} from "native-base";
import authStore from "../../stores/authStore";
import React from "react";
import AddLanguages from "../miniComponents/Buttons/AddLanguages";
import AuthHeading from "../miniComponents/Header/AuthHeading";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";

const CompanyStepTwo = ({
  setStep,
  setUser,
  user,
  navigation,
  setlanguagesModal,
  LanguagesModal,
  jobTitleModal,
  toggleLangModal,
  toggleJobTitleModal,
}) => {
  const toast = useToast();
  const signup = () => {
    setStep();
    authStore.signup(user, toast, navigation);
    // console.log(user);
  };
  return (
    <VStack
      // h="10"
      // style={{}}
      style={{
        // borderWidth: 2,
        // height: 500,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <VStack w={"100%"} h={"80%"} space={19}>
        <HStack w={"100%"} style={{ marginTop: 25 }}>
          <AuthHeading
            title={"Set Up Account"}
            size={20}
            marginLeft={0}
            color={"black"}
          />
        </HStack>
        <AddLanguages
          toggleLangModal={toggleLangModal}
          LanguagesModal={LanguagesModal}
          // setlanguagesModal={setlanguagesModal}
          setUser={setUser}
          user={user}
        />
        <AddLanguages
          toggleJobTitleModal={toggleJobTitleModal}
          jobTitleModal={jobTitleModal}
          // setlanguagesModal={setlanguagesModal}
          setUser={setUser}
          user={user}
        />
      </VStack>
      {/* <TextInput
        style={styles.textInputName}
        // onChangeText={(name) => setTrip({ ...trip, name })}
        placeholder="Looking For..."
      />
      <TextInput
        style={styles.textInputName}
        // onChangeText={(name) => setTrip({ ...trip, name })}
        placeholder="Languages eg.'English', 'Arabic'..."
      /> */}
      {/* <VStack space={3} w={"100%"} style={{ marginTop: 6 }}> */}
      <AuthButtons action={signup} text={"SIGN UP"} Width={"100%"} />
      {/* <AuthButtons
          action={setBack}
          text={"Back"}
          Width={"100%"}
          outLine={true}
        />
      </VStack> */}
    </VStack>
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
