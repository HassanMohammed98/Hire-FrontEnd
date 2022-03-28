import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Button,
  VStack,
  useToast,
  HStack,
  Pressable,
  Divider,
} from "native-base";

const AddLanguages = ({
  setUser,
  LanguagesModal,
  jobTitleModal,
  user,
  toggleLangModal,
  toggleJobTitleModal,
}) => {
  return (
    <VStack
      w={"100%"}
      style={{
        alignItems: "center",
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <HStack
        width={"100%"}
        style={{
          borderRadius: 10,
          // backgroundColor: "white",
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        <VStack>
          <Text
            style={{
              // color: "rgb(245, 245, 245)",
              // textAlign: "center",
              fontSize: 15,
              fontFamily: "Righteous_400Regular",
            }}
          >
            Filter By
            {toggleLangModal
              ? " Language"
              : toggleJobTitleModal && " Job Title"}
          </Text>
          <Text
            style={{
              // textAlign: "center",
              fontSize: 9,
              //   fontFamily: "Righteous_400Regular",
            }}
          >
            **(Optional) Default search includes all
            {toggleLangModal
              ? " Languages"
              : toggleJobTitleModal && " Job Titles"}
          </Text>
        </VStack>
        <Ionicons
          style={{
            marginRight: -3.25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 25,
            color: "rgb(205,205,205)",
          }}
          onPress={() =>
            toggleLangModal
              ? toggleLangModal()
              : toggleJobTitleModal && toggleJobTitleModal()
          }
          name="add-circle"
        />
      </HStack>
      <Divider my={0.5} w={"xs"} h={"0.5"} />
      <HStack
        style={
          user.Languages.length === 0
            ? {
                paddingTop: 50,
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "wrap",
              }
            : {
                paddingLeft: 9,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "wrap",
                marginBottom: 3,
              }
        }
        width={"100%"}
      >
        {toggleLangModal &&
          user.Languages.map((language) => (
            <View
              key={language}
              style={{
                backgroundColor: "rgb(240, 84, 84)",
                padding: 5,
                marginHorizontal: 6,
                marginVertical: 7,
                borderRadius: 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "rgb(245, 245, 245)",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "Righteous_400Regular",
                }}
              >
                {language}
              </Text>
            </View>
          ))}
        {toggleJobTitleModal &&
          user.search.map((job) => (
            <View
              key={job}
              style={{
                backgroundColor: "rgb(240, 84, 84)",
                padding: 5,
                marginHorizontal: 6,
                marginVertical: 7,
                borderRadius: 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "rgb(245, 245, 245)",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "Righteous_400Regular",
                }}
              >
                {job}
              </Text>
            </View>
          ))}
      </HStack>
    </VStack>
  );
};

export default AddLanguages;

const styles = StyleSheet.create({});
