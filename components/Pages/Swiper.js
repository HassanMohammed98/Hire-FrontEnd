import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button, HStack, ScrollView, VStack } from "native-base";
import React, { useEffect } from "react";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import companyStore from "../../stores/companyStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import { observer } from "mobx-react";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { baseURL } from "../../stores/instance";

const Swiper = ({ navigation, viewUser, details }) => {
  const owner = authStore.userOwner;
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
  console.log(filteredUser);
  // console.log(userStore.users);
  // console.log(companyStore);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headermain}>
        <TouchableOpacity style={styles.SLogo}>
          <Image
            style={styles.ImageLogo}
            source={{ uri: baseURL + owner.picture }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.HLogo}></TouchableOpacity>

        <TouchableOpacity style={styles.CLogo}>
          <Ionicons name="chatbubbles-sharp" size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardb}>
          <Image
            style={styles.cardImage}
            source={{ uri: baseURL + owner.picture }}
          />
          <Text>{filteredUser[1]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <HStack style={styles.HStackbutton}>
            <TouchableOpacity style={styles.cross}>
              <Entypo name="cross" size={35} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.check}>
              <Entypo name="check" size={35} />
            </TouchableOpacity>
          </HStack>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(Swiper);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // borderColor: "black",
    // borderWidth: 10,
  },
  // layout: {
  //   height: "79.4%",
  //   width: "76%",
  //   display: "flex",
  //   // flex: 1,
  //   // backgroundColor: "white",
  //   // borderColor: "black",
  //   // borderWidth: 2,
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
  // view: { borderColor: "black", borderWidth: 1, flex: 1, borderRadius: 28 },

  // item: {
  //   borderColor: "black",
  //   borderWidth: 1,
  //   margin: 10,
  //   padding: 20,
  // },

  SLogo: {
    marginLeft: 15,
    marginLeft: 10,
    position: "absolute",
    // alignItems: "center",
    // width: 4,
  },
  // HLogo: {
  //   width: "100%",
  //   alignItems: "center",
  //   backgroundColor: "red",
  //   marginRight: 50,
  // },
  headermain: {
    // alignItems: "center",
    width: "100%",
  },
  CLogo: {
    marginLeft: 370,
    marginTop: 10,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    // backgroundColor: "red",
  },
  cardb: {
    // marginTop: 50,
    // marginLeft: 40,
    // flex: 1,
    width: "88.7%",
    height: "70%",

    backgroundColor: "rgb(245,245,245)",
    alignItems: "center",
    borderRadius: 20,
  },
  cardImage: {
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    width: "100%",
    aspectRatio: 1,
  },
  buttonContainer: {
    flex: -1,

    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-evenly",
    // width: 30,
    // height: 30,
    // backgroundColor: "blue",
    marginTop: 25,
  },
  cross: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "lightcoral",
  },
  check: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "mediumaquamarine",
  },
  HStackbutton: {
    // borderWidth: 1,
    width: "70%",
    justifyContent: "space-evenly",
  },
});
