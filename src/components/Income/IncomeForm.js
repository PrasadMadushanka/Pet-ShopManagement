import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function IncomeForm() {
  const [income, setIncome] = useState({
    payment_name: "",
    description: "",
    payment_id: "",
    amount: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "income"), income);
      alert("Income Added!");
    } catch (error) {
      console.error("Error adding income: ", error);
    }
  };

  return (
    <div className="login-container">
    <header className="header">
      <center>VS Pet Care</center>
    </header>
    <form onSubmit={handleSubmit}>
    <h2>Add Income</h2>
      <input placeholder="Payment Name" onChange={(e) => setIncome({ ...income, payment_name: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setIncome({ ...income, description: e.target.value })} />
      <input placeholder="Payment ID" onChange={(e) => setIncome({ ...income, payment_id: e.target.value })} />
      <input type="number" placeholder="Amount" onChange={(e) => setIncome({ ...income, amount: e.target.value })} />
      <input type="date" onChange={(e) => setIncome({ ...income, date: e.target.value })} />
      <input type="time" onChange={(e) => setIncome({ ...income, time: e.target.value })} />
      <button type="submit">Add Income</button>
    </form>
    </div>
  );
}

export default IncomeForm;
