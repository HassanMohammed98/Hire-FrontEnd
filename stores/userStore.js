import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class UserStore {
  users = [];

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
      console.log("UsersStore -> fetchUsersCorrect -> error", error);
    }
  };
}
const userStore = new UserStore();
userStore.getUsers();
// userStore.getOwner();
export default userStore;
