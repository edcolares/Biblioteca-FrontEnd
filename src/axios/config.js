import axios from "axios";

const blogFetch = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});


export default blogFetch;
