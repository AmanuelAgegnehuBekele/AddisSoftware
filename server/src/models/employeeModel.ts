import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An employee must have a name"],
    },
    gender: {
      type: String,
      required: [true, "An employee must have a Gender"],
    },
    salary: {
      type: Number,
      required: [true, "An employee must have a salary"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "An employee must have a date of birth"],
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
