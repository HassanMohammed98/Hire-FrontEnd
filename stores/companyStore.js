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

  createCompany = async (profile, navigation) => {
    try {
      const response = await instance.post("/company", profile);
      console.log(response.data);
      this.companies.push(response.data);
      navigation.navigate("Home");
    } catch (error) {
      console.log(
        "🚀 ~ file: companyStore.js ~ line 16 ~ CompanyStore ~ createCompany= ~ error",
        error
      );
    }
  };
  updateCompany = (updateCompany) => {
    this.companies = this.companies.map((company) =>
      company._id === updateCompany._id ? updateCompany : company
    );
  };
}
const companyStore = new CompanyStore();
// companyStore.getCompanies();
export default companyStore;
