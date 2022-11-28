import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
import * as types from "./actionType";
import {
  loadEmployeeSuccess,
  loadEmployeeError,
  createEmployeeSuccess,
  createEmployeeError,
  deleteEmployeeError,
  deleteEmployeeSuccess,
  updateEmployeeSuccess,
  updateEmployeeError,
} from "./action";
import {
  loadEmployeeApi,
  createEmployeeApi,
  deleteEmployeeApi,
  updateEmployeeApi,
} from "./service";

function* onLoadEmployeesStartAsync() {
  try {
    const response = yield call(loadEmployeeApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadEmployeeSuccess(response.data));
    }
  } catch (error: any) {
    yield put(loadEmployeeError(error.response.data));
  }
}

function* onCreateEmployeesStartAsync({ payload }: any) {
  try {
    const response = yield call(createEmployeeApi, payload);
    if (response.status === 201) {
      yield put(createEmployeeSuccess());
    }
  } catch (error: any) {
    yield put(createEmployeeError(error.response.data));
  }
}

function* onDeleteEmployeesStartAsync(empId) {
  try {
    const response = yield call(deleteEmployeeApi, empId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteEmployeeSuccess(empId));
    }
  } catch (error: any) {
    yield put(deleteEmployeeError(error.response.data));
  }
}

function* onUpdateEmployeesStartAsync({ payload: { id, fromValue } }: any) {
  try {
    const response = yield call(updateEmployeeApi, id, fromValue);
    if (response.status === 200) {
      yield put(updateEmployeeSuccess());
    }
  } catch (error: any) {
    yield put(updateEmployeeError(error.response.data));
  }
}

function* onLoadEmployees() {
  yield takeEvery(types.LOAD_EMPLOYEES_START, onLoadEmployeesStartAsync);
}

function* onCreateEmployees() {
  yield takeLatest(types.CREATE_EMPLOYEE_START, onCreateEmployeesStartAsync);
}

function* onUpdateEmployees() {
  yield takeLatest(types.UPDATE_EMPLOYEE_START, onUpdateEmployeesStartAsync);
}

function* onDeleteEmployees() {
  while (true) {
    const { payload: empId } = yield take(types.DELETE_EMPLOYEE_START);
    yield call(onDeleteEmployeesStartAsync, empId);
  }
}

const employeeSagas = [
  fork(onLoadEmployees),
  fork(onCreateEmployees),
  fork(onDeleteEmployees),
  fork(onUpdateEmployees),
];

export default function* rootSaga() {
  yield all([...employeeSagas]);
}
