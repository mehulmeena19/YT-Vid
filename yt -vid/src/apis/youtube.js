import axios from "axios";

const KEY = "AIzaSyDL1S0l4djfq2--QGsFNBXNxFtfTv3NkBE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    max_results: "5",
    key: KEY,
  },
});
