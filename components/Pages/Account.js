import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Row, ScrollView, useToast, VStack } from "native-base";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import companyStore from "../../stores/companyStore";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { baseURL } from "../../stores/instance";
import AddViewImage from "../miniComponents/Buttons/AddViewImage";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import EditAccount from "./EditAccount";

const Account = ({ navigation }) => {
  const toast = useToast();
  const owner = authStore.userOwner;
  const [editProfile, setEditProfile] = useState(owner);
  const [editProfileJC, setEditProfileJC] = useState({});

  // const submit = () => {
  //   const updateProfile = { owner: editProfile, profile: editProfileJC };
  //   console.log(updateProfile);
  //   authStore.updateProfile(updateProfile);
  // };

  let userProfile;
  if (authStore.user && authStore.user.type === "Company") {
    userProfile = companyStore.companies.find(
      (company) => company.user === authStore.user._id
    );
    // setEditProfile((old) => (old = userProfile));
  } else if (authStore.user && authStore.user.type === "JobSeeker") {
    userProfile = jobSeekerStore.jobSeekers.find(
      (jobSeeker) => jobSeeker.user === authStore.user._id
    );
  }
  console.log("HassanTesting 55", owner);

  // setEditProfile(userProfile);
  return (
    <VStack space={8}>
      {/* <Image
        style={{
          height: 90,
          aspectRatio: 1,
          zIndex: -1,
          borderRadius: 100,

          // borderColor: "black",
          // borderWidth: 3,
        }}
        source={{ uri: baseURL + owner.picture }}
      /> */}
      <AddViewImage user={editProfile} setUser={setEditProfile} />
      <Text style={styles.userName}>User Name: {owner.username}</Text>
      <Text style={styles.userName}>Email Adress: {owner.email}</Text>
      {/* <Text style={styles.userName}>Search: {owner.search}</Text> */}
      <Text style={styles.userName}>Languages: {owner.Languages}</Text>
      <AuthButtons
        action={() => {
          navigation.navigate("EditAccount");
        }}
        text={"Edit"}
        Width={"80%"}
      />
      {/* <Button
        style={styles.button}
        onPress={() => {
          authStore.signout(toast, navigation);
        }}
      >
        SIGN OUT
      </Button> */}
    </VStack>
  );
};

export default observer(Account);

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    // justifyContent: "space-evenly",
  },

  userName: {
    height: 50,

    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 10,
    marginHorizontal: 30,
    backgroundColor: "white",
  },

  owner: {
    marginTop: 50,
    borderColor: "black",
    borderWidth: 3,
    paddingBottom: 50,
  },

  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
  button: {},
});
