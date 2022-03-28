import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CompanyStepOne from "../../AuthSteps/CompanyStepOne";
import CompanyStepTwo from "../../AuthSteps/CompanyStepTwo";
import CompanySetupOne from "../../SetupAccount/CompanySetupOne";
import JobSeekerSetupOne from "../../SetupAccount/JobSeekerSetupOne";
import AuthHeading from "../../miniComponents/Header/AuthHeading";
import { Button, HStack, VStack, Pressable, Divider } from "native-base";
import AuthStages from "../../miniComponents/Header/AuthStages";
import ApiStore from "../../../stores/DataApiStore";
import { Ionicons } from "@expo/vector-icons";

const RegisterCompany = ({ route, navigation }) => {
  const { type } = route.params;
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    picture: "",
    username: "",
    password: "",
    email: "",
    search: [],
    status: "Available",
    Languages: [],
    loginType: "Hire-APP",
    signUpAs: type,
  });

  const [LanguagesModal, setlanguagesModal] = useState(false);
  const toggleLangModal = () => {
    setlanguagesModal(!LanguagesModal);
  };
  const [jobTitleModal, setJobTitleModal] = useState(false);
  const toggleJobTitleModal = () => {
    setJobTitleModal(!jobTitleModal);
  };
  const langs = ApiStore.LanguagesList.map((lang) => (
    <Pressable
      key={lang}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      onPress={() =>
        user.Languages.includes(lang)
          ? setUser({
              ...user,
              Languages: user.Languages.filter((check) => check !== lang),
            })
          : setUser({ ...user, Languages: [...user.Languages, lang] })
      }
    >
      <HStack style={styles.list}>
        <Ionicons
          style={
            user.Languages.includes(lang)
              ? {
                  fontSize: 25,
                  color: "blue",
                }
              : {
                  fontSize: 25,
                  color: "rgb(205,205,205)",
                }
          }
          name="checkmark-circle"
          size={30}
        />
        <Text style={styles.listText}>{lang}</Text>
      </HStack>
    </Pressable>
  ));
  let jobs = [];
  for (const key in ApiStore.JobTitleList) {
    if (ApiStore.JobTitleList.hasOwnProperty(key)) {
      jobs.push(
        <Text
          key={key}
          style={{
            textAlign: "center",
            marginVertical: 20,
            color: "rgb(45, 45, 45)",
            fontSize: 20,
            fontFamily: "Righteous_400Regular",
          }}
        >
          {key}
        </Text>,
        ApiStore.JobTitleList[key].map((job) => (
          <Pressable
            key={job}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            onPress={() =>
              user.search.includes(job)
                ? setUser({
                    ...user,
                    search: user.search.filter((check) => check !== job),
                  })
                : setUser({ ...user, search: [...user.search, job] })
            }
          >
            <HStack style={styles.list}>
              <Ionicons
                style={
                  user.search.includes(job)
                    ? {
                        fontSize: 25,
                        color: "blue",
                      }
                    : {
                        fontSize: 25,
                        color: "rgb(205,205,205)",
                      }
                }
                name="checkmark-circle"
                size={30}
              />
              <Text style={styles.listText}>{job}</Text>
            </HStack>
          </Pressable>
        ))
      );
    }
  }

  const nextStep = () => {
    setStep(step + 1);
  };
  const setBack = () => {
    setStep(step - 1);
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
            LanguagesModal={LanguagesModal}
            jobTitleModal={jobTitleModal}
            toggleJobTitleModal={toggleJobTitleModal}
            toggleLangModal={toggleLangModal}
            setStep={nextStep}
            step={step}
            setUser={setUser}
            setBack={setBack}
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
      {(LanguagesModal || jobTitleModal) && (
        <View style={styles.modalBackground}>
          <View style={styles.LangModalAdd}>
            <HStack
              w={"90%"}
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 17,
              }}
            >
              <Button
                style={styles.modalButton}
                onPress={() =>
                  LanguagesModal
                    ? toggleLangModal()
                    : jobTitleModal && toggleJobTitleModal()
                }
                _text={{
                  color: "rgb(45, 45, 45)",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "Righteous_400Regular",
                }}
              >
                Cancel
              </Button>
              <Button
                style={styles.modalButton}
                onPress={() =>
                  LanguagesModal
                    ? toggleLangModal()
                    : jobTitleModal && toggleJobTitleModal()
                }
                _text={{
                  color: "rgb(45, 45, 45)",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "Righteous_400Regular",
                }}
              >
                Done
              </Button>
            </HStack>
            <Divider my={0.5} w={"sm"} h={"0.5"} />
            <Text
              style={{
                margin: 15,
                fontSize: 15,
                fontFamily: "Righteous_400Regular",
              }}
            >
              Select preferred
              {LanguagesModal && " Languages"}
              {jobTitleModal && " Job Titles"}
            </Text>

            <ScrollView
              style={{
                width: "100%",
                flex: 1,
              }}
            >
              {LanguagesModal && (
                <View style={{ marginVertical: 10 }}>{langs}</View>
              )}
              {jobTitleModal && (
                <View style={{ marginVertical: 10 }}>{jobs}</View>
              )}
            </ScrollView>
          </View>
        </View>
      )}
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
    width: "82.56%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  stages: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",

    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  LangModalAdd: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(245,245,245)",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    position: "relative",
  },
  modalButton: { backgroundColor: "rgba(245,245,245,0)", color: "black" },
  list: {
    paddingLeft: 20,
    paddingBottom: 10,
    color: "rgb(45, 45, 45)",

    display: "flex",
    alignItems: "center",
  },
  listText: {
    paddingLeft: 20,
    color: "rgb(45, 45, 45)",
    fontSize: 15,
    fontFamily: "Righteous_400Regular",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
