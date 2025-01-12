import React, { useState } from "react";
import EmployeeForm from "../components/Employees/EmployeeForm";
import EmployeeTable from "../components/Employees/EmployeeTable";

function EmployeesPage() {
   const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  return (
    <div>
    <header className="header">
 <center>VS Pet Care</center>
</header><div>
<br></br>
<br></br>
<br></br>
<button 
  style={{
    background: "linear-gradient(45deg, #45a049, #5aa555, #66bb6a)",
    color: "white",
    border: "none",
    borderRadius: "30px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-3px)";
    e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0px)";
    e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }}
  onMouseDown={(e) => {
    e.target.style.transform = "translateY(1px)";
    e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  }}
  onMouseUp={(e) => {
    e.target.style.transform = "translateY(-3px)";
    e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
  }}
  onClick={() => setShowEmployeeForm(!showEmployeeForm)}
>
  <span style={{ fontSize: "20px" }}>
    {showEmployeeForm ? "➖" : "➕"}
  </span>
  {showEmployeeForm ? "Hide Employee Form" : "Add Employee"}
</button>

{showEmployeeForm && <EmployeeForm />}
<EmployeeTable />
</div>
</div>
  );
}

export default EmployeesPage;
