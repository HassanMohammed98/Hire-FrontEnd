import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class JobSeekerStore {
  jobSeekers = [];

  constructor() {
    makeAutoObservable(this);
  }

  getJobSeekers = async () => {
    try {
      const response = await instance.get("/jobseeker");
      this.jobSeekers = response.data;
      console.log(response.data);
    } catch (error) {
      console.log("jobSeekerStore -> fetchJobSeeker -> error", error);
    }
  };
}
const jobSeekerStore = new JobSeekerStore();
jobSeekerStore.getJobSeekers();
export default userStore;
