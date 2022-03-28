import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class JobSeekerStore {
  jobSeekers = [];

  constructor() {
    makeAutoObservable(this);
  }

  getJobSeekers = async () => {
    try {
      // console.log("??");
      const response = await instance.get("/jobseeker");
      this.jobSeekers = response.data;
      console.log("jobseekers now...", response.data);
    } catch (error) {
      console.log("jobSeekerStore -> fetchJobSeeker -> error", error);
    }
  };
  updateJobSeeker = (updateJobSeeker) => {
    this.jobSeekers = this.jobSeekers.map((jobSeeker) =>
      jobSeeker._id === updateJobSeeker._id ? updateJobSeeker : jobSeeker
    );
  };
  createJobSeeker = async (profile, navigation) => {
    try {
      const response = await instance.post("/jobseeker", profile);
      console.log(response.data);
      this.jobSeekers.push(response.data);
      navigation.navigate("Home");
    } catch (error) {
      console.log(
        "🚀 ~ file: companyStore.js ~ line 16 ~ CompanyStore ~ createCompany= ~ error",
        error
      );
    }
  };
}
const jobSeekerStore = new JobSeekerStore();
// jobSeekerStore.getJobSeekers();
export default jobSeekerStore;
