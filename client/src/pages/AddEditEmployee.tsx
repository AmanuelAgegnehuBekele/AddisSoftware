import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createEmployeeStart, updateEmployeeStart } from "../redux/action";
import { EmployeeT } from "../interface";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  height: 750px;
  justify-content: center;
  align-items: center;
`;

const AddContainer = styled.div`
  background-color: white;
  position: absolute;
  height: 20rem;
  width: 20rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  padding-left: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-bottom: 1px solid gray;
`;
const InputContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
const SubmitButton = styled.button`
  margin-top: 0.5rem;
  width: 4rem;
  height: 2rem;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #4287f5;
  color: white;
  border-radius: 0.5rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const initialState: EmployeeT = {
  name: "",
  gender: "",
  salary: 0,
  dateOfBirth: "",
};

const AddEditEmployee = () => {
  const [fromValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { employees } = useSelector((state) => (state as any).data || {});
  const { name, gender, salary, dateOfBirth } = fromValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const employee = employees.find((item) => item._id === id);

      setFormValue({ ...employee });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && gender && salary && dateOfBirth) {
      if (!editMode) {
        dispatch(createEmployeeStart(fromValue));
        toast.success("Employee Added Successfully");
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateEmployeeStart({ id, fromValue }));
        setEditMode(false);
        toast.success("Employee Updated Successfully");
        setTimeout(() => navigate("/"), 500);
      }
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...fromValue, [name]: value });
  };
  return (
    <>
      <ModalContainer>
        <AddContainer>
          <Form onSubmit={handleSubmit}>
            <Header>
              <h4>Add Employee </h4>
            </Header>
            <InputContainer>
              <label htmlFor="name">Name :</label>
              <Input
                value={name || ""}
                name="name"
                type="text"
                onChange={onInputChange}
                required
                label="Name"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="salary">Salary :</label>
              <Input
                value={salary || 0}
                name="salary"
                type="number"
                onChange={onInputChange}
                required
                label="Salary"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="gender">Gender :</label>
              <Input
                value={gender || ""}
                name="gender"
                type="text"
                onChange={onInputChange}
                required
                label="Gender"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">DOB :</label>
              <Input
                value={dateOfBirth || ""}
                name="dateOfBirth"
                type="date"
                onChange={onInputChange}
                required
                label="Date of Birth"
              />
            </InputContainer>
            <ButtonContainer>
              <SubmitButton> {!editMode ? "Add" : "Update"}</SubmitButton>
            </ButtonContainer>
          </Form>
        </AddContainer>
      </ModalContainer>
    </>
  );
};

export default AddEditEmployee;
