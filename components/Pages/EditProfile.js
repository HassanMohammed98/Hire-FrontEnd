import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input, Stack, Icon, useToast } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";
import jobSeekerStore from "../../stores/jobSeekerStore";
import companyStore from "../../stores/companyStore";

const EditProfile = ({ navigation }) => {
  //   const owner = authStore.userOwner;
  //   const [editProfile, setEditProfile] = useState(owner);
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
  const toast = useToast();
  const [editProfileJC, setEditProfileJC] = useState(userProfile);
  const save = () => {
    authStore.updateBio(toast, navigation, editProfileJC);
    // console.log(editProfileJC);
  };
  return (
    <Stack space={4} w="100%" alignItems="center">
      {authStore.user && authStore.user.type === "Company" ? (
        <View space={4} w="100%" alignItems="center">
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Type"
            onChangeText={(type) =>
              setEditProfileJC({ ...editProfileJC, type })
            }
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputRightElement={
              <Icon
                as={<MaterialIcons name="" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="Founders"
            onChangeText={(founders) =>
              setEditProfileJC({ ...editProfileJC, founders })
            }
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="Year Established"
            onChangeText={(yearEstablished) =>
              setEditProfileJC({ ...editProfileJC, yearEstablished })
            }
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="Size"
            onChangeText={(size) =>
              setEditProfileJC({ ...editProfileJC, size })
            }
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="About"
            onChangeText={(about) =>
              setEditProfileJC({ ...editProfileJC, about })
            }
          />
        </View>
      ) : (
        authStore.user &&
        authStore.user.type === "JobSeeker" && (
          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
              placeholder="Firstname"
              onChangeText={(firstname) =>
                setEditProfileJC({ ...editProfileJC, firstname })
              }
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
              placeholder="Lastname"
              onChangeText={(lastname) =>
                setEditProfileJC({ ...editProfileJC, lastname })
              }
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
              placeholder="Education"
              onChangeText={(education) =>
                setEditProfileJC({ ...editProfileJC, education })
              }
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
              placeholder="Experience"
              onChangeText={(experience) =>
                setEditProfileJC({ ...editProfileJC, experience })
              }
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
              placeholder="Skills"
              onChangeText={(skils) =>
                setEditProfileJC({ ...editProfileJC, skils })
              }
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
              placeholder="Phone"
              onChangeText={(phone) =>
                setEditProfileJC({ ...editProfileJC, phone })
              }
            />
            <AuthButtons action={save} text={"SAVE"} Width={"80%"} />
          </Stack>
        )
      )}
    </Stack>
  );
};

export default observer(EditProfile);

const styles = StyleSheet.create({});
