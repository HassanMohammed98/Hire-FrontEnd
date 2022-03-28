import { StyleSheet, Text, View } from "react-native";
import { Input, Stack, Icon, useToast } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import AddViewImage from "../miniComponents/Buttons/AddViewImage";

import authStore from "../../stores/authStore";
import AuthButtons from "../miniComponents/Buttons/AuthButtons";

const EditAccount = ({ navigation }) => {
  const owner = authStore.userOwner;
  const [editProfile, setEditProfile] = useState(owner);
  // const submit = () => {
  //   const updateProfile = { owner: editProfile };
  //   console.log(updateProfile);
  //   authStore.updateProfile(updateProfile);
  // };
  const toast = useToast();
  const save = () => {
    authStore.updateProfile(toast, navigation, editProfile);
    // console.log(editProfile);
  };

  return (
    // <Input
    //   variant="underlined"
    //   placeholder="Enter User Name"
    //   onChangeText={(username) =>
    //     setEditProfile({ ...editProfile, username })
    //   }
    // />
    // <TextInput
    //   style={styles.textInputName}
    //   onChangeText={(password) =>
    //     setEditProfile({ ...editProfile, password })
    //   }
    //   placeholder="Password"
    // />
    // <TextInput
    //   style={styles.textInputName}
    //   onChangeText={(email) => setEditProfile({ ...editProfile, email })}
    //   placeholder="Email Adress"
    // />
    // <TextInput
    //   style={styles.textInputName}
    //   onChangeText={(search) => setEditProfile({ ...editProfile, search })}
    //   placeholder="Search"
    // />
    // <TextInput
    //   style={styles.textInputName}
    //   onChangeText={(Languages) =>
    //     setEditProfile({ ...editProfile, Languages })
    //   }
    //   placeholder="Languages"
    // />{" "}
    // */}
    <Stack space={4} w="100%" alignItems="center">
      <AddViewImage user={editProfile} setUser={setEditProfile} />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="User Name"
        onChangeText={(username) =>
          setEditProfile({ ...editProfile, username })
        }
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputRightElement={
          <Icon
            as={<MaterialIcons name="visibility-off" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
        placeholder="Password"
        onChangeText={(password) =>
          setEditProfile({ ...editProfile, password })
        }
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="email" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
        placeholder="Email Adress"
        onChangeText={(email) => setEditProfile({ ...editProfile, email })}
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
        placeholder="Search"
        onChangeText={(search) => setEditProfile({ ...editProfile, search })}
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="language" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
        placeholder="Languages"
        onChangeText={(Languages) =>
          setEditProfile({ ...editProfile, Languages })
        }
      />
      <AuthButtons action={save} text={"SAVE"} Width={"80%"} />
    </Stack>
  );
};

export default observer(EditAccount);

const styles = StyleSheet.create({});
