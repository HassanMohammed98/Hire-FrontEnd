import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import authStore from "../../stores/authStore";
import companyStore from "../../stores/companyStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import { VStack } from "native-base";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import { TextInput } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const owner = authStore.userOwner;
  const [editProfile, setEditProfile] = useState(owner);
  const [editProfileJC, setEditProfileJC] = useState({});
  let userProfile;
  if (authStore.user && authStore.user.type === "Company") {
    userProfile = companyStore.companies.find(
      (company) => company.user === authStore.user._id
    );
    // setEditProfile((old) => (old = userProfile));
  } else if (authStore.user && authStore.user.type === "JobSeeker") {
    userProfile = jobSeekerStore.jobSeekers.find(
      (jobSeeker) => jobSeeker.user === authStore.user._id
    );
  }
  return (
    <VStack space={8} style={styles.main}>
      {authStore.user && authStore.user.type === "Company" ? (
        <VStack space={8} style={styles.owner}>
          <Text style={styles.userName}>type: {userProfile.type}</Text>
          {/* <Text>NEW type: {editProfileJC.type}</Text> */}
          {/* <TextInput
            style={styles.textInputName}
            onChangeText={(type) =>
              setEditProfileJC({ ...editProfileJC, type })
            }
            placeholder="type"
          /> */}
          <Text style={styles.userName}>founders: {userProfile.founders}</Text>
          {/* <Text>NEW founders: {editProfileJC.founders}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(founders) =>
              setEditProfileJC({ ...editProfileJC, founders })
            }
            placeholder="founders"
          /> */}
          <Text style={styles.userName}>
            yearEstablished: {userProfile.yearEstablished}
          </Text>
          {/* <Text>NEW yearEstablished: {editProfileJC.yearEstablished}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(yearEstablished) =>
              setEditProfileJC({ ...editProfileJC, yearEstablished })
            }
            placeholder="yearEstablished"
          /> */}
          <Text style={styles.userName}>size: {userProfile.size}</Text>
          {/* <Text>NEW size: {editProfileJC.size}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(size) =>
              setEditProfileJC({ ...editProfileJC, size })
            }
            placeholder="size"
          /> */}
          <Text style={styles.userName}>About: {userProfile.about}</Text>
          {/* <Text>NEW About: {editProfileJC.about}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(about) =>
              setEditProfileJC({ ...editProfileJC, about })
            }
            placeholder="about"
          /> */}
        </VStack>
      ) : (
        authStore.user &&
        authStore.user.type === "JobSeeker" && (
          <VStack space={8} style={styles.owner}>
            {/* <Text>NEW prefix: {editProfileJC.prefix}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(prefix) =>
                setEditProfileJC({ ...editProfileJC, prefix })
              }
              placeholder="prefix"
            /> */}
            <Text style={styles.userName}>
              firstname: {userProfile.firstname}
            </Text>
            {/* <Text>NEW firstname: {editProfileJC.firstname}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(firstname) =>
                setEditProfileJC({ ...editProfileJC, firstname })
              }
              placeholder="firstname"
            /> */}
            <Text style={styles.userName}>
              lastname: {userProfile.lastname}
            </Text>
            <Text style={styles.userName}>phone: {userProfile.phone}</Text>
            {/* <Text>NEW lastname: {editProfileJC.lastname}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(lastname) =>
                setEditProfileJC({ ...editProfileJC, lastname })
              }
              placeholder="lastname"
            /> */}
            <Text style={styles.userName}>
              education: {userProfile.education}
            </Text>
            {/* <Text>NEW education: {editProfileJC.education}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(education) =>
                setEditProfileJC({ ...editProfileJC, education })
              }
              placeholder="education"
            /> */}
            <Text style={styles.userName}>
              experience: {userProfile.experience}
            </Text>
            {/* <Text>NEW experience: {editProfileJC.experience}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(experience) =>
                setEditProfileJC({ ...editProfileJC, experience })
              }
              placeholder="experience"
            /> */}
            <Text style={styles.userName}>skils: {userProfile.skils}</Text>
            {/* <Text>NEW skils: {editProfileJC.skils}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(skils) =>
                setEditProfileJC({ ...editProfileJC, skils })
              }
              placeholder="skils"
            /> */}

            {/* <Text>NEW phone: {editProfileJC.phone}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(phone) =>
                setEditProfileJC({ ...editProfileJC, phone })
              }
              placeholder="phone"
            /> */}
            <Text style={styles.userName}>gender: {userProfile.gender}</Text>
            {/* <Text>NEW gender: {editProfileJC.gender}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(gender) =>
                setEditProfileJC({ ...editProfileJC, gender })
              }
              placeholder="phone"
            /> */}
          </VStack>
        )
      )}
      <AuthButtons
        action={() => {
          navigation.navigate("EditProfile");
        }}
        text={"Edit"}
        Width={"80%"}
      />
    </VStack>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userName: {
    height: 50,

    flexDirection: "row",
    paddingHorizontal: 15,

    textAlign: "center",
    fontSize: 18,
    paddingVertical: 10,
    marginHorizontal: 30,
  },
  main: { flex: 1 },
  owner: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
