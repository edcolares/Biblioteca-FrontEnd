import axios from "axios";

const libFetch = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});


export default libFetch;
