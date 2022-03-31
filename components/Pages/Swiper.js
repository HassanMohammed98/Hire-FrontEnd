import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, HStack, ScrollView, useToast, VStack } from "native-base";
import React, { useEffect, useRef } from "react";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import companyStore from "../../stores/companyStore";
import jobSeekerStore from "../../stores/jobSeekerStore";
import { observer } from "mobx-react";
import messageStore from "../../stores/chatStore";
import Swiper from "react-native-deck-swiper";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { baseURL } from "../../stores/instance";

import ScreenHeader from "../miniComponents/Header/ScreenHeader";
const SwiperScreen = ({ navigation }) => {
  const toast = useToast();
  const owner = authStore.userOwner;
  const swipeRef = useRef(null);
  let filteredUser;
  const swipeLeft = async (cardIndex) => {
    const test = filteredUser[cardIndex].user;
    console.log("Swiped pass", test);
  };
  const swipeRight = async (cardIndex) => {
    const test = filteredUser[cardIndex].user;
    // console.log("Swiped Hire", test);
    let chat;
    if (authStore.userOwner.signUpAs === "JobSeeker") {
      chat = {
        companyID: test,
        jobSeekerID: authStore.userOwner._id,
      };
    } else if (authStore.userOwner.signUpAs === "Company") {
      chat = {
        companyID: authStore.userOwner._id,
        jobSeekerID: test,
      };
    }

    await messageStore.createChat(chat, toast);
  };
  if (authStore.user && authStore.user.type === "Company") {
    filteredUser = jobSeekerStore.jobSeekers;
  } else if (authStore.user && authStore.user.type === "JobSeeker") {
    filteredUser = companyStore.companies;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader navigation={navigation} owner={owner} />
      <View style={styles.cardContainer}>
        <View style={styles.cardb}>
          {filteredUser?.length > 0 && (
            <Swiper
              ref={swipeRef}
              cards={filteredUser}
              containerStyle={{
                backgroundColor: "white",
                borderRadius: 20,
                margin: 0,
                padding: 0,
              }}
              stackSize={4}
              cardIndex={0}
              animateCardOpacity
              verticalSwipe={false}
              onSwipedLeft={(cardIndex) => {
                // console.log("Swiped Pass", cardIndex);
                return swipeLeft(cardIndex);
              }}
              onSwipedRight={(cardIndex) => {
                return swipeRight(cardIndex);
              }}
              renderCard={(card) => {
                if (card) {
                  // console.log("viewing now.........", card);
                  const viewUser = userStore.users.find(
                    (user) => user._id === card.user
                  );
                  if (viewUser.signUpAs === "JobSeeker") {
                    return (
                      <View
                        style={{
                          marginLeft: -18.5,
                          marginTop: -60,
                          padding: 0,
                          borderColor: "black",
                          // borderWidth: 0.5,
                          backgroundColor: "white",
                          borderRadius: 10,
                          width: "97.8%",
                          height: "74.99%",
                          shadowColor: "#000",
                          shadowOffSet: {
                            width: 0,
                            height: 1,
                          },
                          shadowOpacity: 0.2,
                          shadowRadius: 1.41,
                          elevation: 2,
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            width: "100%",
                            height: "100%",
                            // borderColor: "black",
                            // borderWidth: 6,
                          }}
                          onPress={() => {
                            navigation.navigate("Details", { details: card });
                          }}
                        >
                          <View
                            style={{
                              flex: 3,
                            }}
                          >
                            {viewUser.picture?.length > 0 ? (
                              <Image
                                style={styles.cardImage}
                                source={{ uri: baseURL + viewUser.picture }}
                              />
                            ) : (
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require("../../assets/userProfile.png")}
                              />
                            )}
                          </View>
                          <View
                            style={{
                              flex: 1.27,
                            }}
                          >
                            <HStack
                              h={"100%"}
                              w={"100%"}
                              // style={{ borderWidth: 2 }}
                            >
                              <VStack
                                space={1}
                                style={{
                                  paddingLeft: 10,
                                  paddingTop: 10,
                                  width: "75%",
                                }}
                              >
                                <Text
                                  numberOfLines={1}
                                  style={{
                                    fontSize: 27,
                                    fontFamily: "Righteous_400Regular",
                                    color: "#30475E",
                                  }}
                                >
                                  {card.firstname?.length > 0 && card.firstname}{" "}
                                  {card.lastname?.length > 0 && card.lastname}
                                </Text>
                                <View
                                  style={{ minWidth: "40%", maxWidth: "90%" }}
                                >
                                  <Text
                                    style={{
                                      fontSize: 13,
                                      fontFamily: "Righteous_400Regular",
                                      color: "#30475E",
                                    }}
                                  >
                                    {card.skills?.length > 0 && "Skills:"}
                                  </Text>
                                  <Text
                                    numberOfLines={1}
                                    style={{
                                      fontSize: 13,
                                      fontFamily: "Righteous_400Regular",
                                      color: "#30475E",
                                    }}
                                  >
                                    {card.skills?.length > 0 && card.skills}
                                  </Text>
                                </View>
                              </VStack>
                              <Text
                                numberOfLines={1}
                                style={{
                                  // borderWidth: 2,
                                  width: "25%",
                                  fontSize: 27,
                                  fontFamily: "Righteous_400Regular",
                                  paddingLeft: 10,
                                  paddingTop: 10,
                                  color: "#30475E",
                                  textAlign: "center",
                                }}
                              >
                                {card.age > 0 && card.age}
                              </Text>
                            </HStack>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  } else if (viewUser.signUpAs === "Company") {
                    return (
                      <View
                        style={{
                          marginLeft: -18.5,
                          marginTop: -60,
                          padding: 0,
                          borderColor: "black",
                          // borderWidth: 0.5,
                          backgroundColor: "white",
                          borderRadius: 10,
                          width: "97.8%",
                          height: "74.99%",
                          shadowColor: "#000",
                          shadowOffSet: {
                            width: 0,
                            height: 1,
                          },
                          shadowOpacity: 0.2,
                          shadowRadius: 1.41,
                          elevation: 2,
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            width: "100%",
                            height: "100%",
                            // borderColor: "black",
                            // borderWidth: 6,
                          }}
                          onPress={() => {
                            navigation.navigate("Details", { details: card });
                          }}
                        >
                          <View
                            style={{
                              flex: 3,
                            }}
                          >
                            {viewUser.picture?.length > 0 ? (
                              <Image
                                style={styles.cardImage}
                                source={{ uri: baseURL + viewUser.picture }}
                              />
                            ) : (
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require("../../assets/CompanyProfile.png")}
                              />
                            )}
                          </View>
                          <View
                            style={{
                              flex: 1.27,
                            }}
                          >
                            {/* {/* <HStack h={"100%"} w={"100%"}> */}
                            <VStack
                              space={1}
                              style={{
                                paddingLeft: 10,
                                paddingTop: 10,
                                width: "75%",
                              }}
                            >
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 27,
                                  fontFamily: "Righteous_400Regular",
                                  color: "#30475E",
                                }}
                              >
                                {viewUser.username}
                              </Text>
                              <View
                                style={{ minWidth: "40%", maxWidth: "90%" }}
                              >
                                <Text
                                  style={{
                                    fontSize: 13,
                                    fontFamily: "Righteous_400Regular",
                                    color: "#30475E",
                                  }}
                                >
                                  {card.founders?.length > 0 && "Founders:"}
                                </Text>
                                <Text
                                  numberOfLines={1}
                                  style={{
                                    fontSize: 13,
                                    fontFamily: "Righteous_400Regular",
                                    color: "#30475E",
                                  }}
                                >
                                  {card.founders?.length > 0 && card.founders}
                                </Text>
                              </View>
                            </VStack>
                            {/* <Text
                              numberOfLines={1}
                              style={{
                                // borderWidth: 2,
                                width: "25%",
                                fontSize: 27,
                                fontFamily: "Righteous_400Regular",
                                paddingLeft: 10,
                                paddingTop: 10,
                                color: "#30475E",
                                textAlign: "center",
                              }}
                            >
                              {card.age}
                            </Text> */}
                            {/* </HStack> */}
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }
                } else {
                  return (
                    <View
                      style={{
                        marginLeft: -18.5,
                        marginTop: -60,
                        padding: 0,
                        borderColor: "black",
                        borderWidth: 0.5,
                        backgroundColor: "white",
                        borderRadius: 10,
                        width: "97.8%",
                        height: "74.99%",
                        shadowColor: "#000",
                        shadowOffSet: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                      }}
                    >
                      <Text>No more Profiles</Text>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: "http://links.papareact.com/6gb" }}
                      />
                    </View>
                  );
                }
              }}
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <HStack style={styles.HStackbutton}>
            <TouchableOpacity
              style={styles.cross}
              onPress={() => swipeRef.current.swipeLeft()}
            >
              <Entypo name="cross" size={35} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.check}
              onPress={() => swipeRef.current.swipeRight()}
            >
              <Entypo name="check" size={35} />
            </TouchableOpacity>
          </HStack>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(SwiperScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  headermain: {
    // alignItems: "center",'
    marginTop: 25,
    width: "100%",
    height: 60,
    // borderWidth: 2,
    position: "relative",
  },
  ImageLogo: {
    width: 37,
    aspectRatio: 1,
    borderRadius: 20,
  },
  SLogo: {
    padding: 10,
    justifyContent: "center",
    width: "20%",
    // borderWidth: 2,
  },
  HLogo: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  CLogo: {
    alignItems: "flex-end",
    padding: 7,
    width: "20%",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  cardb: {
    width: "88.7%",
    height: "70%",
    backgroundColor: "rgb(245,245,245)",
    borderRadius: 20,
  },
  cardImage: {
    // borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    aspectRatio: 1,
    // borderColor: "black",
    // borderWidth: 1,
  },
  buttonContainer: {
    flex: -1,
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-evenly",
    marginTop: 25,
  },
  cross: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "lightcoral",
  },
  check: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "mediumaquamarine",
  },
  HStackbutton: {
    width: "70%",
    justifyContent: "space-evenly",
  },
});

// overlayLabels={
//   {
//     // left: {
//     //   title: "Skip",
//     //   style: {
//     //     label: {
//     //       textAlign: "right",
//     //       color: "red",
//     //       zIndex: 10,
//     //     },
//     //   },
//     // },
//     // right: {
//     //   title: "Hire",
//     //   style: {
//     //     label: {
//     //       textAlign: "left",
//     //       color: "#000000",
//     //       zIndex: 10,
//     //     },
//     //   },
//     // },
//   }
// }

//  {
//    /* <View
//             style={{
//               flex: 3,
//               // borderColor: "green",
//               // borderWidth: 0.25,
//             }}
//             >
//             {viewUser.picture?.length > 0 ? (
//               <Image
//                 style={styles.cardImage}
//                 source={{ uri: baseURL + viewUser.picture }}
//               />
//             ) : (
//               <Image
//                 style={styles.cardImage}
//                 source={require("../../assets/CompanyProfile.png")}
//               />
//             )}
//           </View>
//           <View
//             style={{
//               flex: 1.27,
//               // borderColor: "red",
//               // borderWidth: 0.25,
//             }}
//           >
//             <Text>
//               {card.founders}, {card.type}
//             </Text>
//           </View> */
//  }

//   //     <VStack space={6} style={styles.layout}>
//   //       <ScreenHeader />
//   //       <Text>Swiper</Text>
//   //       {authStore.user && <Text>{authStore.user.username}</Text>}
//   //       {authStore.user && <Text>{authStore.user.type}</Text>}
//   //       {/* <Text>{userStore.users[0].signUpAs}</Text> */}
//   //       <ScrollView style={styles.view}>{filteredUser}</ScrollView>
//   //       <Button
//   //         onPress={() => {
//   //           // navigation.navigate("TripDetail", { trip: trip });
//   //           navigation.navigate("ChatLogs");
//   //         }}
//   //       >

//   //         View Chat Log
//   //       </Button>
//   //       <Button
//   //         onPress={() => {
//   //           navigation.navigate("majd");
//   //         }}
//   //       >
//   //         Header Majd
//   //       </Button>
//   //       <Button
//   //         onPress={() => {
//   //           navigation.navigate("regularHeader");
//   //         }}
//   //       >
//   //         Regular Header
//   //       </Button>
//   //       <Button
//   //         onPress={() => {
//   //           navigation.navigate("setting");
//   //         }}
//   //       >
//   //         Setting
//   //       </Button>
//   //     </VStack>
