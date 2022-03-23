import { StyleSheet, Text, View } from "react-native";
import { Button, useToast } from "native-base";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import companyStore from "../../stores/companyStore";
import { observer } from "mobx-react";
import React from "react";

const EditProfile = ({ navigation }) => {
  const toast = useToast();
  const owner = authStore.userOwner;
  let userProfile;
  if (authStore.user && authStore.user.type === "Company") {
    userProfile = companyStore.companies.find(
      (company) => company.user === authStore.user._id
    );
  } else if (authStore.user && authStore.user.type === "JobSeeker") {
    userProfile = jobSeekerStore.jobSeekers.find(
      (jobSeeker) => jobSeeker.user === authStore.user._id
    );
  }
  console.log(userProfile);
  return (
    <View style={styles.layout}>
      <Text>EditProfile</Text>
      <Button
        onPress={() => {
          authStore.signout(toast, navigation);
        }}
      >
        SIGN OUT
      </Button>
    </View>
  );
};

export default observer(EditProfile);

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flex: 1,
    // backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
