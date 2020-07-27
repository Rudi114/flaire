import axios from "axios";

const base = process.env.VUE_APP_URL;
let head = {
  Authorization: `Bearer ${localStorage.getItem("token")}` || undefined,
  "Content-Type": "application/json"
};
const api = axios.create({
  baseURL: base,
  headers: head
});

export default api;