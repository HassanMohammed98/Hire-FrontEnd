import axios from "axios";


export const baseURL = "http://192.168.100.201:8000";


export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
