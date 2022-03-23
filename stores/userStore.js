import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class UserStore {
  users = [];
  userOwner = {};
  fetchUser = {};

  constructor() {
    makeAutoObservable(this);
  }

  getUsers = async () => {
    try {
      const response = await instance.get("/users");
      this.users = response.data;
      // console.log(response.data);
    } catch (error) {
      console.log("UsersStore -> fetchUsers -> error", error);
    }
  };

  getOwner = async () => {
    try {
      const response = await instance.get("/users/getOwner");
      this.userOwner = response.data;
      //   console.log(response.data);
    } catch (error) {
      console.log("OwnerStore -> fetchOwner -> error", error);
    }
  };
}
const userStore = new UserStore();
userStore.getUsers();
userStore.getOwner();
export default userStore;
