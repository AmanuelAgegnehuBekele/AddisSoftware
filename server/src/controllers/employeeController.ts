import { Request, Response } from "express";
import { EmployeeT } from "../interface/employeeInterface";
import Employee from "../models/employeeModel";

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.find();
    if (employee.length == 0) {
      res.status(404).json("Not Found");
    } else {
      res.status(200).json(employee);
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
};

export const getEmployee = async (req: Request, res: Response) => {
  try {
    const employee: EmployeeT = await Employee.findById(req.params.id);
    if (!employee) {
      res.status(404).json("not found");
    } else {
      res.status(200).json(employee);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json("Employee updated successfully");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
