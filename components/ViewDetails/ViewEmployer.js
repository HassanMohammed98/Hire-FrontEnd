import { StyleSheet, Text, View } from "react-native";
import { VStack, HStack, Image, ScrollView } from "native-base";
import React from "react";
import { baseURL } from "../../stores/instance";

const ViewEmployer = ({ viewUser, details }) => {
  return (
    <ScrollView style={styles.ScrollView}>
      <VStack space={3} style={styles.screen}>
        <HStack style={styles.logo}>
          {/* <Text style={styles.logo}>{viewUser.picture}</Text> */}
          {viewUser.picture.length > 1 ? (
            <Image
              style={{
                width: "30%",
                aspectRatio: 1,
                zIndex: -1,
                borderRadius: 100,
              }}
              alt="Profile Image"
              source={{ uri: baseURL + viewUser.picture }}
            />
          ) : (
            <Image
              style={{
                width: "30%",
                aspectRatio: 1,
              }}
              alt="Employer Profile Image"
              source={require("../../assets/userProfile.png")}
            />
          )}
        </HStack>
        <VStack w={"100%"} space={5} style={styles.name}>
          <Text style={styles.headerText}> {viewUser.username} </Text>
          {details.about.length > 1 && <Text> {details.about} </Text>}
        </VStack>
        <VStack style={styles.aboutCompany}>
          {details.founders.length > 1 && (
            <Text> Founder: {details.founders} </Text>
          )}
          {details.type.length > 1 && <Text> Type: {details.type} </Text>}
          {details.yearEstablished.length > 1 && (
            <Text> Established in: {details.yearEstablished} </Text>
          )}
          {details.size.length > 1 && (
            <Text> Company Size: {details.size}</Text>
          )}
        </VStack>
        <VStack style={styles.currenOpenings}>
          <HStack w={"100%"} style={styles.currenOpenings}>
            <Text style={styles.headerText}> Current Openings </Text>
          </HStack>
          <VStack w={"100%"} style={styles.DesParent}>
            <HStack w={"95%"} style={styles.singleOpening}>
              <Image
                style={{
                  width: "22%",
                  aspectRatio: 1,
                }}
                alt="Employer Profile Image"
                source={require("../../assets/userProfile.png")}
              />

              <VStack w={"75%"} style={styles.testing}>
                <Text style={styles.position}> Junior Developer </Text>

                <Text style={styles.desc}>
                  {" "}
                  Responsible for growing company revenue by effectively
                  managing existing customer accounts and convincing new
                  customers to purchase company services .Leading a team of
                  Account Executives, developing effective marketing proposals,
                  and solicit customer feedback.{" "}
                </Text>
              </VStack>
            </HStack>
            <HStack w={"95%"} style={styles.singleOpening}>
              <Image
                style={{
                  width: "22%",
                  aspectRatio: 1,
                }}
                alt="Employer Profile Image"
                source={require("../../assets/userProfile.png")}
              />
              <VStack w={"75%"} style={styles.testing}>
                <Text style={styles.position}> Senior Developer </Text>
                <Text style={styles.desc}>
                  {" "}
                  Responsible for growing company revenue by effectively
                  managing existing customer accounts and convincing new
                  customers to purchase company services .Leading a team of
                  Account Executives, developing effective marketing proposals,
                  and solicit customer feedback.{" "}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default ViewEmployer;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 45,
    paddingBottom: 75,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
  },
  name: {
    display: "flex",
    // borderColor: "black",
    // borderWidth: 2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "red",
    fontSize: 15,
  },
  aboutCompany: {
    alignItems: "center",
    marginTop: 10,
  },
  currenOpenings: {
    display: "flex",

    // borderColor: "black",
    // borderWidth: 2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  position: {
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    paddingLeft: 10,
  },
  desc: {
    // marginTop: 10,
    padding: 4,
    paddingLeft: 15,
    textAlign: "justify",
  },
  imageLogo: {
    width: "25%",
    aspectRatio: 1,
  },

  singleOpening: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // borderColor: "black",
    // borderWidth: 2,
  },
  DesParent: {
    alignItems: "center",
  },
  screen: {
    marginTop: 20,
  },
  ScrollView: {
    backgroundColor: "white",
  },
});
