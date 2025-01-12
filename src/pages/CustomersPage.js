import React, { useState } from "react";
import CustomerCard from "../components/Customers/CustomerCard"; // Ensure this path is correct
import CustomerForm from "../components/Customers/CustomerForm";

function CustomersPage() {
    const [showCustomerForm, setShowCustomerForm] = useState(false);
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
onClick={() => setShowCustomerForm(!showCustomerForm)}
>
{showCustomerForm ? "Hide Customer Form" : "➕ Add Customer"}
</button>

{showCustomerForm && <CustomerForm />}
<br></br>
<br></br>
<CustomerCard />
</div>
</div>
  );
}

export default CustomersPage;
