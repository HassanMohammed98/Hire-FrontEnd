import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";

const RegularHeader = ({ navigation }) => {
  return (
    <VStack>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={styles.headerLogo}
          alt="headerLogo"
          source={require("../../../assets/hireLogo.png")}
        />
      </Pressable>
    </VStack>
  );
};

export default RegularHeader;

const styles = StyleSheet.create({
  headerLogo: {
    width: "30%",
    aspectRatio: 1,
    // marginRight: 60,
    // alignSelf: "center",
  },
});
