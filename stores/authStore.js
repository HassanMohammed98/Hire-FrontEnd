import axios from "axios";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import jwt-decode to check the token:
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

//! make sure of the code ::
// make auth store - sign up - sign in:
class AuthStore {
  // make empty obj :
  user = null;

  userOwner = null;

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  // signup methods:
  signup = async (userData, toast, navigation) => {
    try {
      const res = await instance.post("/users/signup", userData);
      console.log("test3");
      // Toast.show(`User Registered`);
      toast.show({
        description: "User Registered",
      });
      const reg = "signup";
      this.setUser(res.data.token, navigation, toast, reg);
      console.log("AuthStore -> signup -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // * sign in method:
  signin = async (userData, navigation, toast) => {
    try {
      const res = await instance.post("/users/signin", userData);
      const reg = "signin";
      await this.setUser(res.data.token, navigation, toast, reg);
      await this.getOwner();
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  getOwner = async () => {
    try {
      const response = await instance.get("/users/getOwner");
      this.userOwner = response.data;
      // console.log(response.data);
    } catch (error) {
      console.log("OwnerStore -> fetchOwner -> error", error);
    }
  };

  // * signout method:
  signout = async (toast, navigation) => {
    if (this.user === null) {
      console.log("user is not signed in");
    } else {
      this.user = null;
      await AsyncStorage.removeItem("token");
      navigation.navigate("Registration");
      toast.show({
        description: "Signed Out",
      });
    }
  };

  setUser = async (token, navigation, toast, reg) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    console.log(this.user);
    if (reg === "signin") {
      navigation.navigate("Home");
    }
    // Toast.show(`Signed In`);
    toast.show({
      description: "Signed In",
    });
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < +decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
