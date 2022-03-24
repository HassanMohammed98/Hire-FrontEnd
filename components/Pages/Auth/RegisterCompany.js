import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CompanyStepOne from "../../AuthSteps/CompanyStepOne";
import CompanyStepTwo from "../../AuthSteps/CompanyStepTwo";
import CompanySetupOne from "../../SetupAccount/CompanySetupOne";
import JobSeekerSetupOne from "../../SetupAccount/JobSeekerSetupOne";
import AuthButtons from "../../miniComponents/Buttons/AuthButtons";

const RegisterCompany = ({ route, navigation }) => {
  const { type } = route.params;
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    picture: "",
    username: "",
    password: "",
    email: "",
    search: "",
    status: "Available",
    Languages: "",
    loginType: "Hire-APP",
    signUpAs: type,
  });
  return (
    <View style={styles.layout}>
      <Text>
        SIGN UP as {type === "Company" ? "an Employer" : "a Job Seeker"}
      </Text>
      {step === 1 ? (
        <CompanyStepOne
          setStep={setStep}
          step={step}
          setUser={setUser}
          user={user}
        />
      ) : step === 2 ? (
        <CompanyStepTwo
          setStep={setStep}
          step={step}
          setUser={setUser}
          user={user}
          navigation={navigation}
        />
      ) : step === 3 && type === "Company" ? (
        <CompanySetupOne navigation={navigation} />
      ) : (
        step === 3 &&
        type === "JobSeeker" && <JobSeekerSetupOne navigation={navigation} />
      )}
      <AuthButtons text={"SIGN UP as an Employer"} Width={"73.4%"} />
    </View>
  );
};

export default RegisterCompany;

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
