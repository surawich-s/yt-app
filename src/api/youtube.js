import axios from "axios";

const KEY = "AIzaSyBQX5dUFQ9QpKgoR42dKe166giDRBHUeFU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
