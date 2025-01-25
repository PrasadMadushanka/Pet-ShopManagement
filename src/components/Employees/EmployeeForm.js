import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // For generating unique company IDs

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    employee_name: "",
    photo: "",
    role: "",
    contactNumber: "",
    email: "",
    basic_salary_amount: "",
   
    companyid: uuidv4(), // Automatically generate a unique company ID
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "employees"), employee);
      alert("Employee added successfully!");
      setEmployee({
        employee_name: "",
        photo: "",
        role: "",
        contactNumber: "",
        email: "",
        basic_salary_amount: "",
       
        companyid: uuidv4(), // Reset the company ID
      });
    } catch (error) {
      console.error("Error adding employee: ", error);
      alert("Failed to add employee.");
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <center>VS Pet Care</center>
      </header>

      <div className="login-box">
        <h1>Employee Registration</h1>

    <form onSubmit={handleSubmit}>
      <center>
      <input
        type="text"
        name="employee_name"
        placeholder="Employee Name"
        value={employee.employee_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={employee.role}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={employee.contactNumber}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="basic_salary_amount"
        placeholder="Basic Salary"
        value={employee.basic_salary_amount}
        onChange={handleChange}
        required
      />
      
     
      </center>
      <button type="submit">Add Employee</button>
    </form>
    </div>
   
    </div>
   
    
  );
}

export default EmployeeForm;
