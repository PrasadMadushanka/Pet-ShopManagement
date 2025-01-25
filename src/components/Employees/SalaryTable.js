import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function SalaryTable() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      const snapshot = await getDocs(collection(db, "salaries"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSalaries(data);
    };

    fetchSalaries();
  }, []);

  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Basic Salary</th>
            <th>Bonus</th>
            <th>OT Salary</th>
            <th>Full Salary</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary) => (
            <tr key={salary.id}>
              <td>{salary.employeeName}</td>
              <td>{salary.date}</td>
              <td>{salary.basic_salary_amount}</td>
              <td>{salary.bonus_amount}</td>
              <td>{salary.OT_salary}</td>
              <td>{salary.full_salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalaryTable;
