import axios from "axios";

export default axios.create({
  baseURL: "",
  params: {
    part: "snippet", //to return our videos
    maxResults: 5,
    key: "AIzaSyBfpJPs3SsvVSRYVDCUNKPTa-b6lV-tsoA",
  },
});
