import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";

const ViewJobSeeker = ({ viewUser, details }) => {
  return (
    <VStack space={15} style={styles.detailsPage}>
      <HStack>
        <Text> {viewUser.picture} </Text>
        <VStack w={"100%"} style={styles.header}>
          <HStack>
            {details.prefix.length > 1 && <Text>{details.prefix} </Text>}
            {details.firstname.length > 1 && <Text>{details.firstname}</Text>}
            {details.lastname.length > 1 && <Text> {details.lastname} </Text>}
          </HStack>

          {details.skils.length > 1 && <Text>{details.skils}</Text>}
          {details.gender.length > 1 && <Text>{details.gender}</Text>}
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
      {details.education.length > 0 && (
        <VStack w={"100%"} style={styles.bodyTwo} space={2}>
          <Text style={styles.aboutHeader}>Education</Text>
          <Text>Regis University: DBA in Business Administration</Text>
          <Text>CODED: Fullstack Bootcamp</Text>
        </VStack>
      )}
      {details.experience.length > 0 && (
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
        {details.skils.length > 0 && (
          <VStack w={"50%"} style={styles.bodyThree} space={2}>
            <Text style={styles.skilsBody}>Skills</Text>
            <Text>Development: *****</Text>
            <Text>Development: *****</Text>
            <Text>Development: *****</Text>
            <Text>Development: *****</Text>
          </VStack>
        )}
        {details.skils.length > 0 && (
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

export default ViewJobSeeker;

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
    backgroundColor: "white",
    // borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    marginBottom: 100,
  },
});
