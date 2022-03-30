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
import Profile from "../Pages/Profile";
import Setting from "../Pages/Setting";
import Account from "../Pages/Account";
import EditAccount from "../Pages/EditAccount";
import ScreenHeader from "../miniComponents/Header/ScreenHeader";
import RegularHeader from "../miniComponents/Header/RegularHeader";

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
      <Screen
        name="ChatLogs"
        component={ChatLogs}
        options={{ headerShown: false }}
      />
      <Screen name="ChatHistory" component={ChatHistory} />
      <Screen name="Details" component={Details} />
      <Screen name="Account" component={Account} />
      <Screen name="EditAccount" component={EditAccount} />
      <Screen name="profile" component={Profile} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen
        name="setting"
        component={Setting}
        options={{ headerShown: false }}
      />
      <Screen name="majd" component={ScreenHeader} />
      <Screen name="regularHeader" component={RegularHeader} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
