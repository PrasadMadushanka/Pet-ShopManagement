import React, { useState } from "react";
import IncomeForm from "../components/Income/IncomeForm";
import IncomeTable from "../components/Income/IncomeTable";

function IncomePage() {
    const [showIncomeForm, setShowIncomeForm] = useState(false);
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
onClick={() => setShowIncomeForm(!showIncomeForm)}
>
{showIncomeForm ? "Hide Income Form" : "➕ Add Income"}
</button>

{showIncomeForm && <IncomeForm />}
<IncomeTable />
</div>
</div>
    
  );
}

export default IncomePage;
