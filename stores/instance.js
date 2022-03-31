import axios from "axios";
import io from "socket.io/client-dist/socket.io";
import authStore from "./authStore";
import messageStore from "./chatStore";
import userStore from "./userStore";

export const baseURL = "http://192.168.166.114:8000";
export const socket = io(baseURL);
socket.on("chat", async function (msg) {
  console.log(
    "0000000000000000000000000000000000000000000===========================00000000000000000000000000000000",
    msg
  );
  await authStore.getOwner();
  await userStore.getUsers();
  await messageStore.getMessages();
});

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
