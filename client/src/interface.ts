export type Action = {
  type: string;
  payload: JSON;
};

export type EmployeeT = {
  name: string;
  gender: string;
  salary: number;
  dateOfBirth: string;
};

export type Error = string;
