import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function ExpensesTable() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const snapshot = await getDocs(collection(db, "expenses"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  return (
    <center>
       <h1>Expenses Table</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Service Rendered</th>
          <th>Cost</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.expense_name}</td>
            <td>{expense.service_rendered}</td>
            <td>{expense.cost}</td>
            <td>{expense.date}</td>
            <td>{expense.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
}

export default ExpensesTable;
