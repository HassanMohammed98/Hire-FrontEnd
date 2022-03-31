import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class MessageStore {
  messages = [];

  constructor() {
    makeAutoObservable(this);
  }

  getMessages = async () => {
    try {
      const response = await instance.get("/chats/fetchMessages");
      this.messages = response.data;
      console.log("companies now...", response.data);
    } catch (error) {
      console.log("CompanyStore -> fetchcompany -> error", error);
    }
  };

  createMessage = async (messageInfo) => {
    try {
      const response = await instance.post("/chats/messageCreate", messageInfo);
      console.log(response.data);
      this.messages.push(response.data);
      //   navigation.navigate("Home");
      //   toast.show({
      //     description: "Account Setup Done",
      //   });
    } catch (error) {
      console.log(
        "🚀 ~ file: companyStore.js ~ line 16 ~ CompanyStore ~ createCompany= ~ error",
        error
      );
    }
  };
  createChat = async (Chat, toast) => {
    try {
      // console.log(Chat);
      const response = await instance.post("/chats", Chat);
      console.log(response.data);

      // this.messages.push(response.data);
      //   navigation.navigate("Home");
      toast.show({
        description: "Matched.. Start Chatting",
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: companyStore.js ~ line 16 ~ CompanyStore ~ createCompany= ~ error",
        error
      );
    }
  };
}
const messageStore = new MessageStore();
messageStore.getMessages();
// userStore.getOwner();
export default messageStore;
