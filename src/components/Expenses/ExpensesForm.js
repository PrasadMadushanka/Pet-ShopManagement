import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./ExpensesForm.css";

function ExpensesForm({ onClose }) {
  const [expense, setExpense] = useState({
    expense_name: "",
    service_rendered: "",
    cost: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "expenses"), expense);
      alert("Expense Added!");
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding expense: ", error);
    }
  };

  return (
    <div className="login-container">
    <header className="header">
      <center>VS Pet Care</center>
    </header>
 
    
        <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
          <input
            placeholder="Expense Name"
            onChange={(e) => setExpense({ ...expense, expense_name: e.target.value })}
          />
          <input
            placeholder="Service Rendered"
            onChange={(e) => setExpense({ ...expense, service_rendered: e.target.value })}
          />
          <input
            type="number"
            placeholder="Cost"
            onChange={(e) => setExpense({ ...expense, cost: e.target.value })}
          />
          <input
            type="date"
            onChange={(e) => setExpense({ ...expense, date: e.target.value })}
          />
          <input
            type="time"
            onChange={(e) => setExpense({ ...expense, time: e.target.value })}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
   
  );
}

export default ExpensesForm;
