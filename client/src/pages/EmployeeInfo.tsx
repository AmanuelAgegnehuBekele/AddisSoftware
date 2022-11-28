import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";

const EmployeeInfo = () => {
  const { employees } = useSelector((state) => (state as any).data || {});
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((item) => item._id === id);
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <p className="col-md-12 fs-3">Employee Detail</p>
        <hr />
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6 ">{employee._id}</p>
        <p className="col-md-6 fw-bold">Name:</p>
        <p className="col-md-6 ">{employee.name}</p>
        <p className="col-md-6 fw-bold">Gender:</p>
        <p className="col-md-6 ">{employee.gender}</p>
        <p className="col-md-6 fw-bold">Salary:</p>
        <p className="col-md-6 ">{employee.salary}</p>
        <p className="col-md-6 fw-bold">Date of Birth:</p>
        <p className="col-md-6 ">{employee.dateOfBirth}</p>
      </div>

      <MDBBtn onClick={() => navigate("/")} color="danger">
        Go Back
      </MDBBtn>
    </div>
  );
};

export default EmployeeInfo;
