import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Swiper from "../Pages/Swiper";
import Details from "../Pages/Details";
import ChatHistory from "../Pages/ChatHistory";
import ChatLogs from "../Pages/ChatLogs";
import EditProfile from "../Pages/EditProfile";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Swiper} />
      <Screen name="ChatLogs" component={ChatLogs} />
      <Screen name="ChatHistory" component={ChatHistory} />
      <Screen name="Details" component={Details} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
