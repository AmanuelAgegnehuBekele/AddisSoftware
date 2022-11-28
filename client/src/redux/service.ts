import axios from "axios";

const baseUrl = "https://addis-api.onrender.com/api/v1/employee";

export const createEmployeeApi = async (employee) => {
  return await axios.post(`${baseUrl}`, employee);
};

export const loadEmployeeApi = async () => {
  return await axios.get(`${baseUrl}`);
};

export const getEmployeeApi = async (empId) => {
  return await axios.get(`${baseUrl}/${empId}`);
};

export const deleteEmployeeApi = async (empId) => {
  return await axios.delete(`${baseUrl}/${empId}`);
};

export const updateEmployeeApi = async (empId, empInfo) => {
  console.log("update", "empId", empId, "emp", empInfo);
  return await axios.patch(`${baseUrl}/${empId}`, empInfo);
};
