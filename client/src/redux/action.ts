import { EmployeeT } from "../interface";
import * as types from "./actionType";

export const loadEmployeeStart = () => ({
  type: types.LOAD_EMPLOYEES_START,
});

export const loadEmployeeSuccess = (employees: EmployeeT) => ({
  type: types.LOAD_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const loadEmployeeError = (error: Error) => ({
  type: types.LOAD_EMPLOYEES_ERROR,
  payload: error,
});

export const createEmployeeStart = (employee: EmployeeT) => ({
  type: types.CREATE_EMPLOYEE_START,
  payload: employee,
});

export const createEmployeeSuccess = () => ({
  type: types.CREATE_EMPLOYEE_SUCCESS,
});

export const createEmployeeError = (error: Error) => ({
  type: types.CREATE_EMPLOYEE_ERROR,
  payload: error,
});

export const deleteEmployeeStart = (empId: string) => ({
  type: types.DELETE_EMPLOYEE_START,
  payload: empId,
});

export const deleteEmployeeSuccess = (empId: string) => ({
  type: types.DELETE_EMPLOYEE_SUCCESS,
  payload: empId,
});

export const deleteEmployeeError = (error: Error) => ({
  type: types.DELETE_EMPLOYEE_ERROR,
  payload: error,
});

export const updateEmployeeStart = (employee) => ({
  type: types.UPDATE_EMPLOYEE_START,
  payload: employee,
});

export const updateEmployeeSuccess = () => ({
  type: types.UPDATE_EMPLOYEE_SUCCESS,
});

export const updateEmployeeError = (error: Error) => ({
  type: types.UPDATE_EMPLOYEE_ERROR,
  payload: error,
});
