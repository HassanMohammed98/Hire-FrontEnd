import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, HStack, ScrollView, VStack } from "native-base";
import React, { useEffect } from "react";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import companyStore from "../../stores/companyStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import { observer } from "mobx-react";
import messageStore from "../../stores/chatStore";

import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { baseURL } from "../../stores/instance";

import ScreenHeader from "../miniComponents/Header/ScreenHeader";

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
  // console.log(filteredUser);
  // console.log(userStore.users);
  // console.log(companyStore);
  return (
    //     <VStack space={6} style={styles.layout}>
    //       <Text>Swiper</Text>
    //       {authStore.user && <Text>{authStore.user.username}</Text>}
    //       {authStore.user && <Text>{authStore.user.type}</Text>}

    //       {/* <Text>{userStore.users[0].signUpAs}</Text> */}
    //       <ScrollView style={styles.view}>{filteredUser}</ScrollView>
    //       <Button
    //         onPress={async () => {
    //           // navigation.navigate("TripDetail", { trip: trip });

    //           await messageStore.getMessages();
    //           navigation.navigate("ChatLogs");
    //         }}
    //       >
    //         View Chat Log
    //       </Button>

    //       <Button
    //         onPress={() => {
    //           navigation.navigate("setting");
    //         }}
    //       >
    //         Setting
    //       </Button>
    //     </VStack>

    <SafeAreaView style={styles.screen}>
      <ScreenHeader navigation={navigation} owner={owner} />

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

    //     <VStack space={6} style={styles.layout}>
    //       <ScreenHeader />
    //       <Text>Swiper</Text>
    //       {authStore.user && <Text>{authStore.user.username}</Text>}
    //       {authStore.user && <Text>{authStore.user.type}</Text>}

    //       {/* <Text>{userStore.users[0].signUpAs}</Text> */}
    //       <ScrollView style={styles.view}>{filteredUser}</ScrollView>
    //       <Button
    //         onPress={() => {
    //           // navigation.navigate("TripDetail", { trip: trip });
    //           navigation.navigate("ChatLogs");
    //         }}
    //       >
    //         View Chat Log
    //       </Button>
    //       <Button
    //         onPress={() => {
    //           navigation.navigate("majd");
    //         }}
    //       >
    //         Header Majd
    //       </Button>
    //       <Button
    //         onPress={() => {
    //           navigation.navigate("regularHeader");
    //         }}
    //       >
    //         Regular Header
    //       </Button>
    //       <Button
    //         onPress={() => {
    //           navigation.navigate("setting");
    //         }}
    //       >
    //         Setting
    //       </Button>
    //     </VStack>
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

  headermain: {
    // alignItems: "center",'
    marginTop: 25,
    width: "100%",
    height: 60,
    // borderWidth: 2,
    position: "relative",
  },
  ImageLogo: {
    width: 37,
    aspectRatio: 1,
    borderRadius: 20,
  },
  SLogo: {
    padding: 10,
    justifyContent: "center",
    width: "20%",
    // borderWidth: 2,
  },
  HLogo: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    // borderWidth: 2,
    width: "60%",
  },
  CLogo: {
    // marginLeft: 300,
    // marginTop: 10,
    // borderWidth: 2,
    alignItems: "flex-end",
    padding: 7,
    // paddingRight: 8,
    width: "20%",
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
