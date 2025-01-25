import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function SalaryForm({ employees }) {
  const [salaryData, setSalaryData] = useState({
    employeeId: "",
    OT_hours: 0,
    OT_rate: 0,
    bonus_amount: 0,
    date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalaryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedEmployee = employees.find(
      (emp) => emp.id === salaryData.employeeId
    );

    if (!selectedEmployee) {
      alert("Please select a valid employee.");
      return;
    }

    const OT_salary = salaryData.OT_hours * salaryData.OT_rate;
    const full_salary =
      parseFloat(selectedEmployee.basic_salary_amount) +
      parseFloat(salaryData.bonus_amount) +
      OT_salary;

    const newSalaryEntry = {
      employeeName: selectedEmployee.employee_name,
      date: salaryData.date,
      basic_salary_amount: selectedEmployee.basic_salary_amount,
      bonus_amount: salaryData.bonus_amount,
      OT_salary: OT_salary.toFixed(2),
      full_salary: full_salary.toFixed(2),
    };

    try {
      await addDoc(collection(db, "salaries"), newSalaryEntry);
      alert("Salary details added successfully!");
      setSalaryData({
        employeeId: "",
        OT_hours: 0,
        OT_rate: 0,
        bonus_amount: 0,
        date: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("Error adding salary details:", error);
      alert("Failed to add salary details.");
    }
  };

  return (
    <div>
      <h2>Calculate Full Salary</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="employeeId"
          value={salaryData.employeeId}
          onChange={handleChange}
          required
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.employee_name}
            </option>
          ))}
        </select>
        <div>
  <label htmlFor="OT_hours">Overtime Hours</label>
  <input
    type="number"
    id="OT_hours"
    name="OT_hours"
    placeholder="OT Hours"
    value={salaryData.OT_hours}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label htmlFor="OT_rate">Overtime Hourly Rate</label>
  <input
    type="number"
    id="OT_rate"
    name="OT_rate"
    placeholder="OT Hour Rate"
    value={salaryData.OT_rate}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label htmlFor="bonus_amount">Bonus Amount</label>
  <input
    type="number"
    id="bonus_amount"
    name="bonus_amount"
    placeholder="Bonus Amount"
    value={salaryData.bonus_amount}
    onChange={handleChange}
    required
  />
</div>

        <input
          type="date"
          name="date"
          value={salaryData.date}
          onChange={handleChange}
        />
        <button type="submit">Add Salary Details</button>
      </form>
    </div>
  );
}

export default SalaryForm;
