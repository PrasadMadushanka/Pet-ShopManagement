import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./EmployeeTable.css"; // Import the CSS file

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const snapshot = await getDocs(collection(db, "employees"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (<center>
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Role</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Basic Salary</th>
          
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              {employee.photo && <img src={employee.photo} alt="Employee" />}
            </td>
            <td>{employee.employee_name}</td>
            <td>{employee.role}</td>
            <td>{employee.contactNumber}</td>
            <td>{employee.email}</td>
            <td>{employee.basic_salary_amount}</td>

          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
}

export default EmployeeTable;
