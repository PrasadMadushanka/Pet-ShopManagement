import React, { useState } from "react";
import ExpensesForm from "../components/Expenses/ExpensesForm";
import ExpensesTable from "../components/Expenses/ExpensesTable";

function ExpensesPage() {
  const [showExpensesForm, setShowExpensesForm] = useState(false);
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
  onClick={() => setShowExpensesForm(!showExpensesForm)}
>
  {showExpensesForm ? "Hide Expenses Form" : "➕ Add Expenses"}
</button>

    {showExpensesForm && <ExpensesForm />}
    <ExpensesTable />
    </div>
    </div>
  );
}

export default ExpensesPage;
