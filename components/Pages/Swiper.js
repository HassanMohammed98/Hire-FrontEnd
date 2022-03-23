import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, ScrollView, VStack } from "native-base";
import React, { useEffect } from "react";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import companyStore from "../../stores/companyStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import { observer } from "mobx-react";

const Swiper = ({ navigation }) => {
  let filteredUser;
  if (authStore.user && authStore.user.type === "Company") {
    filteredUser = jobSeekerStore.jobSeekers.map((jobseeker) => (
      <View key={jobseeker._id} style={styles.item}>
        <Text
          onPress={() => {
            navigation.navigate("Details", { details: jobseeker });
          }}
        >
          {jobseeker.firstname} {jobseeker.lastname}
        </Text>
      </View>
    ));
  } else if (authStore.user && authStore.user.type === "JobSeeker") {
    filteredUser = companyStore.companies.map((company) => (
      <View key={company._id} style={styles.item}>
        <Text
          onPress={() => {
            navigation.navigate("Details", { details: company });
          }}
        >
          {company.founders} {company.type}
        </Text>
      </View>
    ));
  }
  // console.log(userStore.users);
  // console.log(companyStore);
  return (
    <VStack space={6} style={styles.layout}>
      <Text>Swiper</Text>
      {authStore.user && <Text>{authStore.user.username}</Text>}
      {authStore.user && <Text>{authStore.user.type}</Text>}

      {/* <Text>{userStore.users[0].signUpAs}</Text> */}
      <ScrollView style={styles.view}>{filteredUser}</ScrollView>
      <Button
        onPress={() => {
          // navigation.navigate("TripDetail", { trip: trip });
          navigation.navigate("ChatLogs");
        }}
      >
        View Chat Log
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        View Employee / Company CV
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        Edit Profile
      </Button>
    </VStack>
  );
};

export default observer(Swiper);

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  view: { borderColor: "black", borderWidth: 1, margin: 25 },
  item: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 20,
  },
});
