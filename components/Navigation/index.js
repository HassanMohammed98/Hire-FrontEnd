import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Swiper from "../Pages/Swiper";
import Details from "../Pages/Details";
import ChatHistory from "../Pages/ChatHistory";
import ChatLogs from "../Pages/ChatLogs";
import EditProfile from "../Pages/EditProfile";
import Registration from "../Pages/Auth/Registration";
import SignIn from "../Pages/Auth/SignIn";
import ResetPassword from "../Pages/Auth/ResetPassword";
import RegisterCompany from "../Pages/Auth/RegisterCompany";
import RegisterJobseeker from "../Pages/Auth/RegisterJobseeker";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Registration">
      <Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen name="ResetPassword" component={ResetPassword} />
      <Screen
        name="RegisterCompany"
        component={RegisterCompany}
        options={{ headerShown: false }}
      />
      <Screen name="RegisterJobseeker" component={RegisterJobseeker} />
      <Screen name="Home" component={Swiper} options={{ headerShown: false }} />
      <Screen name="ChatLogs" component={ChatLogs} />
      <Screen name="ChatHistory" component={ChatHistory} />
      <Screen name="Details" component={Details} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
