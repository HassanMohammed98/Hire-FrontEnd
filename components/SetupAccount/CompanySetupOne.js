import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, HStack, useToast, VStack } from "native-base";
import React, { useState } from "react";
import companyStore from "../../stores/companyStore";
import AuthHeading from "../miniComponents/Header/AuthHeading";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";

const CompanySetupOne = ({ navigation }) => {
  const toast = useToast();
  const [editUser, setEditUser] = useState({
    type: "",
    founders: "",
    yearEstablished: 0,
    size: 0,
    about: "",
  });
  const createProfile = () => {
    companyStore.createCompany(editUser, navigation, toast);
  };
  return (
    <View style={styles.companysetup}>
      <VStack space={6}>
        <HStack w={"100%"} style={{ marginTop: 25, marginBottom: 25 }}>
          <AuthHeading
            title={"Set Up Account"}
            size={20}
            marginLeft={0}
            color={"black"}
          />
        </HStack>

        <VStack>
          <TextInput
            style={styles.textInputName}
            onChangeText={(founders) => setEditUser({ ...editUser, founders })}
            placeholder="Founders"
          />
          <Text style={{ fontSize: 9, textAlign: "left", marginBottom: 0 }}>
            (Optional)
          </Text>
        </VStack>
        <VStack>
          <TextInput
            style={styles.textInputName}
            onChangeText={(type) => {
              setEditUser({ ...editUser, type });
            }}
            placeholder="Type"
          />
          <Text style={{ fontSize: 9, textAlign: "left", marginBottom: 0 }}>
            (Optional)
          </Text>
        </VStack>
        <HStack w={"100%"} style={{ height: 50 }}>
          <VStack style={{ flex: 1 }}>
            <TextInput
              style={styles.textInputDetails}
              keyboardType="number-pad"
              onChangeText={(size) => setEditUser({ ...editUser, size })}
              placeholder="Estimate Size"
            />
            <Text
              style={{
                fontSize: 9,
                textAlign: "left",
                marginBottom: 0,
                marginLeft: 4,
              }}
            >
              (Optional)
            </Text>
          </VStack>
          <VStack style={{ flex: 1 }}>
            <TextInput
              style={styles.textInputDetails}
              keyboardType="phone-pad"
              onChangeText={(yearEstablished) =>
                setEditUser({ ...editUser, yearEstablished })
              }
              placeholder="Year Established"
            />
            <Text
              style={{
                fontSize: 9,
                textAlign: "left",
                marginBottom: 0,
                marginLeft: 4,
              }}
            >
              (Optional)
            </Text>
          </VStack>
        </HStack>
        <VStack>
          <TextInput
            style={styles.textInputAbout}
            onChangeText={(about) => setEditUser({ ...editUser, about })}
            placeholder="About (brief Description)"
            maxLength={100}
            multiline={true}
          />
          <HStack style={{ justifyContent: "space-between" }}>
            <Text style={{ fontSize: 9, textAlign: "left", marginBottom: 4 }}>
              (Optional)
            </Text>
            <Text
              style={{ fontSize: 9, textAlign: "right", marginBottom: 4 }}
            >{`${editUser.about.length}/100`}</Text>
          </HStack>
        </VStack>
      </VStack>
      <AuthButtons action={createProfile} text={"Get Started"} Width={"100%"} />
    </View>
  );
};

export default CompanySetupOne;

const styles = StyleSheet.create({
  companysetup: {
    flex: 1,
    justifyContent: "space-between",
  },
  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 1,
    padding: 4,
    height: 32,
  },
  textInputAbout: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 1,
    padding: 4,
    height: 32,
  },
  textInputDetails: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
    flex: 1,
  },
});
