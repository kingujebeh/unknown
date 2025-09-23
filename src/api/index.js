import axios from "axios";

const baseURL =
  typeof window !== "undefined"
    ? `https://${window.location.hostname}/api`
    : "http://localhost:3000/api"; // fallback for Node.js

export default axios.create({
  baseURL,
});
