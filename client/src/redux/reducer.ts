import { Action } from "../interface";
import * as types from "./actionType";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.LOAD_EMPLOYEES_START:
    case types.CREATE_EMPLOYEE_START:
    case types.DELETE_EMPLOYEE_START:
    case types.UPDATE_EMPLOYEE_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };
    case types.CREATE_EMPLOYEE_SUCCESS:
    case types.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: state.employees.filter(
          (item) => item._id !== action.payload
        ),
      };
    case types.LOAD_EMPLOYEES_ERROR:
    case types.CREATE_EMPLOYEE_ERROR:
    case types.DELETE_EMPLOYEE_ERROR:
    case types.UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
