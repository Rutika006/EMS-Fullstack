import axios from "axios";

// Deployed backend URL on Render
const REST_API_BASE_URL = 'https://ems-backend-ktn4.onrender.com/api/employes';

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createEmployee = (employee) => {
  return axios.post(REST_API_BASE_URL, employee);
};

export const getEmployee = (employeeId) => {
  return axios.get(`${REST_API_BASE_URL}/${employeeId}`);
};

export const updateEmployee = (employeeId, employee) => {
  return axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee);
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(`${REST_API_BASE_URL}/${employeeId}`);
};
