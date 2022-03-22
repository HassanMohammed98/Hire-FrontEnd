import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CompanyStepOne from "../../AuthSteps/CompanyStepOne";
import CompanyStepTwo from "../../AuthSteps/CompanyStepTwo";

const RegisterCompany = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    picture: "",
    username: "",
    password: "",
    email: "",
    search: "",
    Languages: "",
    loginType: "Hire-APP",
    signUpAs: "Company",
  });
  return (
    <View style={styles.layout}>
      <Text>SIGN UP as an Employer</Text>
      {step === 1 ? (
        <CompanyStepOne
          setStep={setStep}
          step={step}
          setUser={setUser}
          user={user}
        />
      ) : (
        step === 2 && (
          <CompanyStepTwo
            setStep={setStep}
            step={step}
            setUser={setUser}
            user={user}
            navigation={navigation}
          />
        )
      )}
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
