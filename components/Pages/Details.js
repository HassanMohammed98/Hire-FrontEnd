import { StyleSheet, Text, View } from "react-native";
import React from "react";
import userStore from "../../stores/userStore";
import ViewJobSeeker from "../ViewDetails/ViewJobSeeker";
import ViewEmployer from "../ViewDetails/ViewEmployer";

const Details = ({ navigation, route }) => {
  const { details } = route.params;
  const viewUser = userStore.users.find((user) => user._id === details.user);
  // console.log("ThisviewUser55", details.about.length);
  // console.log("ThisviewUser22", viewUser);
  if (viewUser.signUpAs === "JobSeeker") {
    return <ViewJobSeeker viewUser={viewUser} details={details} />;
  } else if (viewUser.signUpAs === "Company") {
    return <ViewEmployer viewUser={viewUser} details={details} />;
  }
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
