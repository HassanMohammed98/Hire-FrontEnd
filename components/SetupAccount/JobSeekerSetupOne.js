import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, HStack, useToast, VStack } from "native-base";
import React, { useState } from "react";
import jobSeekerStore from "../../stores/jobSeekerStore";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import AuthHeading from "../miniComponents/Header/AuthHeading";

const JobSeekerSetupOne = ({ navigation }) => {
  const toast = useToast();
  // let confirm = "";
  const [editUser, setEditUser] = useState({
    prefix: "",
    firstname: "",
    lastname: "",
    gender: "",
    phone: 0,
    // education: "",
    // experience: "",
    skills: "",
    about: "",
    age: 0,
  });
  const createProfile = () => {
    jobSeekerStore.createJobSeeker(editUser, navigation, toast);
  };
  return (
    <View style={styles.companysetup}>
      <VStack space={4}>
        <HStack w={"100%"} style={{ marginTop: 25, marginBottom: 25 }}>
          <AuthHeading
            title={"Set Up Account"}
            size={20}
            marginLeft={0}
            color={"black"}
          />
        </HStack>
        <HStack w={"100%"} style={{ height: 45 }}>
          <VStack style={{ flex: 1 }}>
            <TextInput
              style={styles.textInputDetails}
              onChangeText={(prefix) => {
                setEditUser({ ...editUser, prefix });
              }}
              placeholder="Prefix"
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
          <VStack style={{ flex: 2 }}>
            <TextInput
              style={styles.textInputDetails}
              onChangeText={(firstname) => {
                setEditUser({ ...editUser, firstname });
              }}
              placeholder="First Name"
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
          <VStack style={{ flex: 2 }}>
            <TextInput
              style={styles.textInputDetails}
              onChangeText={(lastname) => {
                setEditUser({ ...editUser, lastname });
              }}
              placeholder="Last Name"
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
        <HStack w={"100%"} style={{ height: 45 }}>
          <VStack style={{ flex: 1 }}>
            <TextInput
              style={styles.textInputDetails}
              onChangeText={(gender) => setEditUser({ ...editUser, gender })}
              placeholder="Gender"
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
              onChangeText={(age) => setEditUser({ ...editUser, age })}
              placeholder="Age"
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
        <VStack h={45}>
          <TextInput
            style={styles.textInputName}
            onChangeText={(phone) => {
              setEditUser({ ...editUser, phone });
            }}
            keyboardType="phone-pad"
            placeholder="Phone"
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
        <VStack>
          <TextInput
            style={styles.textInputName}
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
        <TextInput
          style={styles.textInputName}
          onChangeText={(skills) => setEditUser({ ...editUser, skills })}
          placeholder="Skills"
        />
      </VStack>
      <AuthButtons action={createProfile} text={"Get Started"} Width={"100%"} />
    </View>
  );
};

export default JobSeekerSetupOne;

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

//     <View>

//       <Button
//         onPress={() => {
//           console.log(editUser);
//           jobSeekerStore.createJobSeeker(editUser, navigation);
//           // user.password === confirm?
//           //   setStep(step + 1);
//           toast.show({
//             description: "Account Setup Done",
//           });
//         }}
//       >
//         Skip
//       </Button>
//     </View>
//   );
// };

// export default JobSeekerSetupOne;

// const styles = StyleSheet.create({
//   textInputName: {
//     borderBottomColor: "black",
//     borderBottomWidth: 1,
//     margin: 4,
//     padding: 4,
//     height: 32,
//   },
// });
