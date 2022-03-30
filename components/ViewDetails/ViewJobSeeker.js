import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { HStack, VStack, Image } from "native-base";
import { baseURL } from "../../stores/instance";

const ViewJobSeeker = ({ viewUser, details }) => {
  return (
    <View style={styles.main}>
      <View style={styles.userContainer}>
        <Image
          style={styles.image}
          source={{ uri: baseURL + viewUser.picture }}
        />
        <HStack style={styles.name}>
          <Text style={styles.nameText}>{details.firstname}</Text>
          <Text style={styles.nameText}>{details.lastname}</Text>
        </HStack>
        <Text style={styles.emailText}>{viewUser.email}</Text>
        <View style={styles.education}>
          <Text style={styles.Phone}> Phone: </Text>
          <Text> {details.phone}</Text>
          <Text style={styles.Phone}> Skills: {details.skills}</Text>
          <Text>{details.skills}</Text>
          <Text style={styles.Phone}> About:</Text>
          <Text>{details.about}</Text>
        </View>
      </View>
    </View>
  );
};
export default ViewJobSeeker;
const styles = StyleSheet.create({
  headerLayout: {
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
    // borderWidth: 1,
    // borderColor: "black",
    marginTop: 20,
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    // borderColor: "black",
    // borderWidth: 1,
    paddingLeft: 15,
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
    fontWeight: "bold",
  },
  aboutHeaderBlack: {
    fontSize: 15,
    textAlign: "center",
    color: "darkgray",
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
    // borderColor: "black",
    // borderWidth: 1,
    padding: 15,
    paddingLeft: 50,
  },
  parentPage: {
    flex: 1,
    backgroundColor: "white",
    // borderWidth: 1,
    display: "flex",
  },
  footer: {
    marginBottom: 100,
  },
  border: {
    borderColor: "black",
    borderWidth: 1,
  },
  JobTitleOne: {
    fontWeight: "bold",
  },
  jobOpenning: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    position: "relative",
  },
  positionOpen: {
    position: "relative",
    width: "75%",
  },
  positionBody: {
    textAlign: "justify",
    color: "grey",
  },
  candidateName: {
    fontWeight: "bold",
  },
  educationHeader: {
    fontWeight: "bold",
  },
  educationbody: {
    color: "grey",
  },
  ////////////////////////
  main: { height: 980, backgroundColor: "white" },
  userContainer: {
    width: "100%",
    height: "60%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // marginTop: 25,
    width: 170,
    height: 170,
    borderRadius: 20,
  },
  name: {
    // borderWidth: 1,
    width: 250,
    justifyContent: "space-evenly",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "700",
  },
  emailText: {
    color: "grey",
    fontSize: 17,
  },
  education: {
    width: 400,
    height: 300,
    backgroundColor: "whitesmoke",
    position: "relative",
    borderRadius: 20,
    marginTop: 15,
    // alignItems: "center",
  },
  Phone: {
    marginTop: 40,
    fontWeight: "900",
  },
});

// <ScrollView space={1} style={styles.parentPage}>
//   <HStack style={styles.headerLayout} h={70} w={"100%"}>
//     {/* <Text> {viewUser.picture} </Text> */}
//     {viewUser.picture.length > 1 ? (
//       <Image
//         style={{
//           height: "100%",
//           aspectRatio: 1,
//           zIndex: -1,
//           borderRadius: 100,
//           // borderColor: "black",
//           // borderWidth: 3,
//         }}
//         alt="Profile Image"
//         source={{ uri: baseURL + viewUser.picture }}
//       />
//     ) : (
//       <Image
//         style={{
//           width: "22%",
//           aspectRatio: 1,
//         }}
//         alt="JobSeeker Profile Image"
//         source={require("../../assets/userProfile.png")}
//       />
//     )}
//     <VStack w={"100%"} h={"60%"} style={styles.header}>
//       <HStack>
//         {details.prefix.length > 1 && (
//           <Text style={styles.candidateName}>{details.prefix} </Text>
//         )}
//         {details.firstname.length > 1 && (
//           <Text style={styles.candidateName}>{details.firstname}</Text>
//         )}
//         {details.lastname.length > 1 && (
//           <Text style={styles.candidateName}> {details.lastname} </Text>
//         )}
//       </HStack>
//       {details.skils.length > 1 && <Text>{details.skils}</Text>}
//       {details.gender.length > 1 && <Text>{details.gender}</Text>}
//     </VStack>
//   </HStack>
//   <VStack w={"100%"} style={styles.bodyOne} space={2}>
//     <Text style={styles.aboutHeader}> About Me </Text>
//     <Text style={styles.aboutHeaderBlack}>
//       {" "}
//       I am flexible and experienced individual with great experience in many
//       fields especialy coding.{" "}
//     </Text>
//   </VStack>
//   {/* {details.education.length > 0 && ( */}
//   <VStack w={"100%"} style={styles.bodyTwo} space={2}>
//     <Text style={styles.aboutHeader}>Education</Text>
//     <Text style={styles.educationHeader}>Regis University</Text>
//     <Text style={styles.educationbody}>
//       DBA in Business Administration{" "}
//     </Text>
//     <Text style={styles.educationHeader}>CODED Academy</Text>
//     <Text style={styles.educationbody}>
//       Fullstack Bootcamp HTML, CSS, Javascript
//     </Text>
//   </VStack>
//   {/* // )} */}
//   {/* {details.experience.length > 0 && ( */}
//   <VStack w={"100%"} style={styles.bodyTwo} space={2}>
//     <Text style={styles.aboutHeader}>Experience</Text>
//     <HStack style={styles.jobOpenning}>
//       <Image
//         style={{
//           width: "22%",
//           aspectRatio: 1,
//         }}
//         alt="JobSeeker Profile Image"
//         source={require("../../assets/userProfile.png")}
//       />
//       <VStack style={styles.positionOpen}>
//         <Text style={[styles.JobTitleOne]}>
//           Junior Developer @Coded Fullstack Developer React, React Native,
//           Javascript, CSS and HTML
//         </Text>
//         <Text style={styles.positionBody}>
//           Responsible for growing company revenue by effectively managing
//           existing customer accounts and convincing new customers to
//           purchase company services .Leading a team of Account Executives,
//           developing effective marketing proposals, and solicit customer
//           feedback.
//         </Text>
//       </VStack>
//     </HStack>
//     <HStack style={styles.jobOpenning}>
//       <Image
//         style={{
//           width: "22%",
//           aspectRatio: 1,
//         }}
//         alt="JobSeeker Profile Image"
//         source={require("../../assets/userProfile.png")}
//       />
//       <VStack style={styles.positionOpen}>
//         <Text style={[styles.JobTitleOne]}>
//           Business Administration Officer Needed @Coded to do Administration
//           work
//         </Text>
//         <Text style={styles.positionBody}>
//           Responsible for growing company revenue by effectively managing
//           existing customer accounts and convincing new customers to
//           purchase company services .Leading a team of Account Executives,
//           developing effective marketing proposals, and solicit customer
//           feedback.
//         </Text>
//       </VStack>
//     </HStack>
//   </VStack>
//   {/* )} */}
//   <HStack w={"100%"} style={styles.footer}>
//     {/* Fix Skills Naming */}
//     {details.skils.length > 0 && (
//       <VStack w={"50%"} style={styles.bodyThree} space={2}>
//         <Text style={styles.skilsBody}>Skills</Text>
//         <Text>Development: *****</Text>
//         <Text>Development: *****</Text>
//         <Text>Development: *****</Text>
//         <Text>Development: *****</Text>
//       </VStack>
//     )}
//     {details.skils.length > 0 && (
//       <VStack w={"50%"} style={styles.bodyThree} space={2}>
//         <Text style={styles.languageBody}>Languages</Text>
//         <Text>English: *****</Text>
//         <Text>Arabic: *****</Text>
//         <Text>Javascript: *****</Text>
//       </VStack>
//     )}
//   </HStack>
// </ScrollView>
