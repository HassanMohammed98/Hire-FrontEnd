import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CompanyStepOne from "../../AuthSteps/CompanyStepOne";
import CompanyStepTwo from "../../AuthSteps/CompanyStepTwo";
import CompanySetupOne from "../../SetupAccount/CompanySetupOne";
import JobSeekerSetupOne from "../../SetupAccount/JobSeekerSetupOne";
import AuthHeading from "../../miniComponents/Header/AuthHeading";
import { VStack } from "native-base";
import AuthStages from "../../miniComponents/Header/AuthStages";

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

  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.layout}>
        <VStack space={5} w={"100%"}>
          <AuthHeading
            title={`SIGN UP as ${
              type === "Company" ? "an Employer" : "a Job Seeker"
            }`}
            size={27.4}
            marginLeft={"-1.87%"}
            color={"black"}
          />
          <View style={styles.stages}>
            <AuthStages step={step} />
          </View>
        </VStack>
        {step === 1 ? (
          <CompanyStepOne
            setStep={nextStep}
            step={step}
            setUser={setUser}
            user={user}
          />
        ) : step === 2 ? (
          <CompanyStepTwo
            setStep={nextStep}
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
      </View>
    </View>
  );
};

export default RegisterCompany;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  layout: {
    height: "79.4%",
    width: "78.55%",
    display: "flex",
    // flex: 1,
    // backgroundColor: "white",
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  stages: {
    width: "100%",
    // borderColor: "black",
    // borderWidth: 1,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
