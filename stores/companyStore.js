import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class CompanyStore {
  companies = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCompanies = async () => {
    try {
      const response = await instance.get("/company");

      this.companies = response.data;
      console.log("companies now...", response.data);
    } catch (error) {
      console.log("CompanyStore -> fetchcompany -> error", error);
    }
  };
}
const companyStore = new CompanyStore();
companyStore.getCompanies();
export default userStore;
