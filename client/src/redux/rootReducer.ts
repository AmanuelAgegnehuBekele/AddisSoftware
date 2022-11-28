import { combineReducers } from "redux";

import employeesReducer from "./reducer";

const rootReducer = combineReducers({
  data: employeesReducer,
});

export default rootReducer;
