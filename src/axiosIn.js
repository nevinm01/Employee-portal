// src/axiosIn.js
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.DEV ? "" : "https://core-skill-test.webc.in",
  headers: { "Content-Type": "application/json" },
});

export default instance;
