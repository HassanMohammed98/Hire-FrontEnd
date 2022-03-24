import { StyleSheet, Text, View } from "react-native";
import { Button, ScrollView, useToast, VStack } from "native-base";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import companyStore from "../../stores/companyStore";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const EditProfile = ({ navigation }) => {
  const toast = useToast();
  const owner = authStore.userOwner;
  const [editProfile, setEditProfile] = useState({});
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
  console.log(owner);

  // setEditProfile(userProfile);
  return (
    <ScrollView style={styles.layout}>
      <Text>EditProfile</Text>
      <VStack space={50}>
        <VStack style={styles.owner}>
          <Text>{owner.picture}</Text>
          <Text>User Name: {owner.username}</Text>
          <Text>NEW User Name: {editProfile.username}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(username) =>
              setEditProfile({ ...editProfile, username })
            }
            placeholder="username"
          />
          <Text>Password: {owner.password}</Text>
          <Text>NEW Password: {editProfile.password}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(password) =>
              setEditProfile({ ...editProfile, password })
            }
            placeholder="Password"
          />
          <Text>Email Adress: {owner.email}</Text>
          <Text>NEW Email: {editProfile.email}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(email) => setEditProfile({ ...editProfile, email })}
            placeholder="Email Adress"
          />
          <Text>Search: {owner.search}</Text>
          <Text>NEW Search: {editProfile.search}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(search) =>
              setEditProfile({ ...editProfile, search })
            }
            placeholder="Search"
          />
          <Text>Status {owner.status}</Text>
          <Text>NEW status: {editProfile.status}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(status) =>
              setEditProfile({ ...editProfile, status })
            }
            placeholder="Status"
          />
          <Text>Languages: {owner.Languages}</Text>
          <Text>NEW Languages: {editProfile.Languages}</Text>
          <TextInput
            style={styles.textInputName}
            onChangeText={(Languages) =>
              setEditProfile({ ...editProfile, Languages })
            }
            placeholder="Languages"
          />
        </VStack>

        {authStore.user && authStore.user.type === "Company" ? (
          <VStack style={styles.owner}>
            <Text>type: {userProfile.type}</Text>
            <Text>NEW type: {editProfileJC.type}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(type) =>
                setEditProfileJC({ ...editProfileJC, type })
              }
              placeholder="type"
            />
            <Text>founders: {userProfile.founders}</Text>
            <Text>NEW founders: {editProfileJC.founders}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(founders) =>
                setEditProfileJC({ ...editProfileJC, founders })
              }
              placeholder="founders"
            />
            <Text>yearEstablished: {userProfile.yearEstablished}</Text>
            <Text>NEW yearEstablished: {editProfileJC.yearEstablished}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(yearEstablished) =>
                setEditProfileJC({ ...editProfileJC, yearEstablished })
              }
              placeholder="yearEstablished"
            />
            <Text>size: {userProfile.size}</Text>
            <Text>NEW size: {editProfileJC.size}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(size) =>
                setEditProfileJC({ ...editProfileJC, size })
              }
              placeholder="size"
            />
            <Text>About: {userProfile.about}</Text>
            <Text>NEW About: {editProfileJC.about}</Text>
            <TextInput
              style={styles.textInputName}
              onChangeText={(about) =>
                setEditProfileJC({ ...editProfileJC, about })
              }
              placeholder="about"
            />
          </VStack>
        ) : (
          authStore.user &&
          authStore.user.type === "JobSeeker" && (
            <VStack style={styles.owner}>
              <Text>prefix: {userProfile.prefix}</Text>
              <Text>NEW prefix: {editProfileJC.prefix}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(prefix) =>
                  setEditProfileJC({ ...editProfileJC, prefix })
                }
                placeholder="prefix"
              />
              <Text>firstname: {userProfile.firstname}</Text>
              <Text>NEW firstname: {editProfileJC.firstname}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(firstname) =>
                  setEditProfileJC({ ...editProfileJC, firstname })
                }
                placeholder="firstname"
              />
              <Text>lastname: {userProfile.lastname}</Text>
              <Text>NEW lastname: {editProfileJC.lastname}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(lastname) =>
                  setEditProfileJC({ ...editProfileJC, lastname })
                }
                placeholder="lastname"
              />
              <Text>education: {userProfile.education}</Text>
              <Text>NEW education: {editProfileJC.education}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(education) =>
                  setEditProfileJC({ ...editProfileJC, education })
                }
                placeholder="education"
              />
              <Text>experience: {userProfile.experience}</Text>
              <Text>NEW experience: {editProfileJC.experience}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(experience) =>
                  setEditProfileJC({ ...editProfileJC, experience })
                }
                placeholder="experience"
              />
              <Text>skils: {userProfile.skils}</Text>
              <Text>NEW skils: {editProfileJC.skils}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(skils) =>
                  setEditProfileJC({ ...editProfileJC, skils })
                }
                placeholder="skils"
              />
              <Text>phone: {userProfile.phone}</Text>
              <Text>NEW phone: {editProfileJC.phone}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(phone) =>
                  setEditProfileJC({ ...editProfileJC, phone })
                }
                placeholder="phone"
              />
              <Text>gender: {userProfile.gender}</Text>
              <Text>NEW gender: {editProfileJC.gender}</Text>
              <TextInput
                style={styles.textInputName}
                onChangeText={(gender) =>
                  setEditProfileJC({ ...editProfileJC, gender })
                }
                placeholder="phone"
              />
            </VStack>
          )
        )}
      </VStack>

      <Button
        style={styles.button}
        onPress={() => {
          authStore.signout(toast, navigation);
        }}
      >
        SIGN OUT
      </Button>
    </ScrollView>
  );
};

export default observer(EditProfile);

const styles = StyleSheet.create({
  layout: {
    height: 500,
    display: "flex",
    flex: 1,
    // backgroundColor: "white",
    flexDirection: "column",
    // justifyContent: "space-evenly",
  },

  owner: {
    marginTop: 50,
    borderColor: "black",
    borderWidth: 3,
    paddingBottom: 50,
  },

  textInputName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 4,
    padding: 4,
    height: 32,
  },
  button: {},
});
