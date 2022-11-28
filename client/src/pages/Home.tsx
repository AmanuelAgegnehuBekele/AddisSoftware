import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployeeStart, loadEmployeeStart } from "../redux/action";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => (state as any).data || {}
  );
  useEffect(() => {
    dispatch(loadEmployeeStart());
  }, []);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee")) {
      dispatch(deleteEmployeeStart(id));
      toast.success("Employee deleted successfully");
    }
  };

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Gender.</th>
            <th scope="col">Salary.</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {employees &&
          employees.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.salary}</td>
                <td>{item.dateOfBirth}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item._id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </MDBBtn>
                  <Link to={`/editEmployee/${item._id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{
                          color: "#55acee",
                          marginLeft: "5px",
                          marginBottom: "16px",
                        }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>
                  <Link to={`/employeeInfo/${item._id}`}>
                    <MDBTooltip title="View" tag="a">
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{
                          color: "#3p5998",
                          marginLeft: "7px",
                          marginBottom: "16px",
                        }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default Home;
