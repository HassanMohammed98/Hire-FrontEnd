import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import UserProfile from "../SVG/UserProfile";
import CompanyProfile from "../SVG/CompanyProfile";
import { Button, Image, useToast, VStack } from "native-base";
import React from "react";
import { baseURL } from "../../../stores/instance";

const AddViewImage = ({ user, setUser }) => {
  const AddImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result);
    let uriParts = result.uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    let uri = result.uri;
    console.log(uri);
    if (!result.cancelled) {
      setUser({
        ...user,
        picture: {
          uri,
          name: `photo.${fileType}`,
          type: `image/${fileType}`,
        },
      });
      console.log(user.picture);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        // borderColor: "black",
        // borderWidth: 1,
        display: "flex",
        alignItems: "center",
        // marginBottom: 50,
      }}
    >
      <View style={styles.imageBox}>
        {user.picture.uri ? (
          <Image
            style={{
              height: 169,
              aspectRatio: 1,
              zIndex: -1,
              // borderRadius: 100,
              // borderColor: "black",
              // borderWidth: 3,
            }}
            alt="Profile Image"
            source={{ uri: user.picture.uri }}
          />
        ) : user.picture.length > 1 ? (
          <Image
            style={{
              height: 169,
              aspectRatio: 1,
              zIndex: -1,
              // resizeMode: "contain",
              borderRadius: 100,
            }}
            alt="Company Profile Image"
            source={{ uri: baseURL + user.picture }}
          />
        ) : user.signUpAs === "Company" ? (
          // <CompanyProfile height={166} />
          <Image
            style={{
              height: 169,
              aspectRatio: 1,
              zIndex: -1,
              // resizeMode: "contain",
              borderRadius: 100,
            }}
            alt="Company Profile Image"
            source={require("../../../assets/CompanyProfile.png")}
          />
        ) : (
          user.signUpAs === "JobSeeker" && <UserProfile height={165} />
        )}
        <View style={styles.addbutton}>
          <Ionicons
            name="camera-outline"
            size={30}
            onPress={() => AddImage()}
          />
        </View>
      </View>
    </View>
  );
};

export default AddViewImage;

const styles = StyleSheet.create({
  imageBox: {
    // padding: 10,
    position: "relative",
    // borderColor: "black",
    // borderWidth: 1,
    height: 169,
    aspectRatio: 1,
    borderRadius: 85,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addbutton: {
    height: 50,
    aspectRatio: 1,
    borderColor: "black",
    position: "absolute",
    borderWidth: 1,
    borderRadius: 25,
    bottom: 0,
    right: 7,
    backgroundColor: "rgb(245,245,245)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
