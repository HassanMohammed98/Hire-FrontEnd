import { StyleSheet, Text, View } from "react-native";
import { HStack, VStack } from "native-base";
import React from "react";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";

const Details = ({ navigation, route }) => {
  const { details } = route.params;
  // const owner = authStore.userOwner;
  // let userProfile;
  // if (authStore.user && authStore.user.type === "Company") {
  //   userProfile = companyStore.companies.find(
  //     (company) => company.user === authStore.user._id
  //   );
  // } else if (authStore.user && authStore.user.type === "JobSeeker") {
  //   userProfile = jobSeekerStore.jobSeekers.find(
  //     (jobSeeker) => jobSeeker.user === authStore.user._id
  //   );
  // }
  const CV = userStore.users.find((user) => user._id === details.user);
  console.log("ThisCV", details);
  console.log("ThisCV22", CV);
  return (
    <VStack space={15} style={styles.detailsPage}>
      <HStack>
        <Text> {CV.picture} </Text>
        <VStack w={"100%"} style={styles.header}>
          <HStack>
            <Text>{details.prefix} </Text>
            <Text>{details.firstname}</Text>
            <Text> {details.lastname} </Text>
          </HStack>

          <Text>{details.skils}</Text>
          <Text>{details.gender}</Text>
        </VStack>
      </HStack>
      <VStack w={"100%"} style={styles.bodyOne} space={2}>
        <Text style={styles.aboutHeader}> About Me </Text>
        <Text>
          {" "}
          I am flexible and experienced individual with great experience in many
          fields especialy coding.{" "}
        </Text>
      </VStack>
      {details.education && (
        <VStack w={"100%"} style={styles.bodyTwo} space={2}>
          <Text style={styles.aboutHeader}>Education</Text>
          <Text>Regis University: DBA in Business Administration</Text>
          <Text>CODED: Fullstack Bootcamp</Text>
        </VStack>
      )}
      {details.experience && (
        <VStack w={"100%"} style={styles.bodyTwo} space={2}>
          <Text style={styles.aboutHeader}>Experience</Text>
          <Text>
            Junior Developer @Coded Fullstack Developer React, React Native,
            Javascript, CSS and HTML
          </Text>
          <Text>
            Business Administration Officer Developing the company revenue by
            constantly lorem ipsum hutai kolomen
          </Text>
        </VStack>
      )}
      <HStack w={"100%"} style={styles.footer}>
        {/* Fix Skills Naming */}
        {details.skils && (
          <VStack w={"50%"} style={styles.bodyThree} space={2}>
            <Text style={styles.skilsBody}>Skills</Text>
            <Text>Development: *****</Text>
            <Text>Development: *****</Text>
            <Text>Development: *****</Text>
            <Text>Development: *****</Text>
          </VStack>
        )}
        {details.skils && (
          <VStack w={"50%"} style={styles.bodyThree} space={2}>
            <Text style={styles.languageBody}>Languages</Text>
            <Text>English: *****</Text>
            <Text>Arabic: *****</Text>
            <Text>Javascript: *****</Text>
          </VStack>
        )}
      </HStack>
    </VStack>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    // borderColor: "black",
    // borderWidth: 1,
    padding: 15,
    // marginTop: 5,
  },
  bodyOne: {
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    padding: 15,
  },
  aboutHeader: {
    color: "red",
    fontSize: 15,
  },
  bodyTwo: {
    // borderColor: "black",
    // borderWidth: 1,
    padding: 15,
  },
  skilsBody: {
    color: "red",
    fontSize: 15,
  },
  languageBody: {
    color: "red",
    fontSize: 15,
  },
  bodyThree: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    paddingLeft: 50,
  },
  detailsPage: {
    flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    marginBottom: 100,
  },
});
