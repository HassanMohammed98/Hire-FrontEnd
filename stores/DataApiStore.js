import Languages from "../DummyData.js/Languages";
import jobTitles from "../DummyData.js/JobTitle";
import { makeAutoObservable } from "mobx";

class Apis {
  LanguagesList = Languages;
  JobTitleList = jobTitles;
  constructor() {
    makeAutoObservable(this);
  }
}

const ApiStore = new Apis();
export default ApiStore;
