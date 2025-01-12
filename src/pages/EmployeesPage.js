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
className="modern-button" 
onClick={() => setShowEmployeeForm(!showEmployeeForm)}
>
{showEmployeeForm ? "Hide Employee Form" : "➕ Add Employee"}
</button>

{showEmployeeForm && <EmployeeForm />}
<EmployeeTable />
</div>
</div>
  );
}

export default EmployeesPage;
