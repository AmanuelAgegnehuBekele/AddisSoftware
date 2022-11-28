import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditEmployee from "./pages/AddEditEmployee";
import EmployeeInfo from "./pages/EmployeeInfo";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEditEmployee />} />
          <Route path="/editEmployee/:id" element={<AddEditEmployee />} />
          <Route path="/employeeInfo/:id" element={<EmployeeInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
