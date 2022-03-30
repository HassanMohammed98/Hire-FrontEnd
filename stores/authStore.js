import axios from "axios";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import jwt-decode to check the token:
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import companyStore from "./companyStore";
import jobSeekerStore from "./jobSeekerStore";
import userStore from "./userStore";

//! make sure of the code ::
// make auth store - sign up - sign in:
class AuthStore {
  // make empty obj :
  user = null;

  userOwner = null;
  ownerChats = null;

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  // signup methods:
  signup = async (userData, toast, navigation) => {
    try {
      userData.search = userData.search.join("\n");
      userData.Languages = userData.Languages.join("\n");
      console.log(userData);
      const formData = new FormData();
      for (const key in userData) {
        formData.append(key, userData[key]);
      }
      const res = await instance.post("/users/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        transformRequest: (data, headers) => {
          return formData;
        },
      });
      // console.log("test3");
      // Toast.show(`User Registered`);
      toast.show({
        description: "User Registered",
      });
      const reg = "signup";
      await this.setUser(res.data.token, navigation, toast, reg);
      await this.getOwner();
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
      // if (res.data.token) {
      await this.setUser(res.data.token, navigation, toast, reg);
      await this.getOwner(); // await this.getOwnerChats();
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
      // } else {
      //   toast.show({
      //     description: "Check fields",
      //   });
      // }
    } catch (error) {
      if (error.message.includes("401")) {
        toast.show({
          description: "Check Username or Password",
        });
      }
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
  getOwnerChats = async () => {
    try {
      const response = await instance.get("/chats/fetchOwnerChats");
      this.ownerChats = response.data;
      console.log("cc", response.data);
    } catch (error) {
      console.log("UsersStore -> fetchUsers -> error", error);
    }
  };
  updateProfile = async (toast, navigation, editProfile) => {
    try {
      const formData = new FormData();
      for (const key in editProfile) {
        formData.append(key, editProfile[key]);
      }
      let res;
      if (editProfile.picture === this.userOwner.picture) {
        res = await instance.put("/users/editOwner", editProfile);
      } else {
        res = await instance.put("/users/editOwner", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          transformRequest: (data, headers) => {
            return formData;
          },
        });
      }
      this.userOwner = res.data;
      navigation.navigate("Account");

      toast.show({
        description: "Updated Account",
      });
    } catch (error) {
      console.log("AuthStore -> updateProfile -> error", error);
    }
  };
  updateBio = async (toast, navigation, editProfileJC) => {
    try {
      const res = await instance.put("/users/editBio", editProfileJC);
      // this.userOwner = res.data.owner;
      if (this.userOwner.signUpAs === "Company") {
        companyStore.updateCompany(res.data);
      } else if (this.userOwner.signUpAs === "jobSeeker") {
        jobSeekerStore.updateJobSeeker(res.data);
      }
      navigation.navigate("profile");

      toast.show({
        description: "Updated Bio",
      });
    } catch (error) {
      console.log("AuthStore -> updateProfile -> error", error);
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
    await companyStore.getCompanies();
    await jobSeekerStore.getJobSeekers();
    await userStore.getUsers();
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
