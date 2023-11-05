import axios from "axios";

// Define the individual functions and assign them to objects
const createSession = (sessionData) => {
  return axios.post("/api/sessions", sessionData);
};

const getSessions = () => {
  return axios.get("/api/sessions");
};

const getSession = (id) => {
  return axios.get("/api/sessions/" + id);
};

const updateSession = (id, sessionData) => {
  return axios.put("/api/sessions/" + id, sessionData);
};

const deleteSession = (id) => {
  return axios.delete("/api/sessions/" + id);
};

const getCourseworks = () => {
  return axios.get("/api/courseworks");
};

// Create an object that contains references to those functions
const API = {
  createSession,
  getSessions,
  getSession,
  updateSession,
  deleteSession,
  getCourseworks,
};

// Export the object containing the functions
export default API;
