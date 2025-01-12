import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function IncomeTable() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const fetchIncome = async () => {
      const snapshot = await getDocs(collection(db, "income"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setIncome(data);
    };

    fetchIncome();
  }, []);

  return (
    <center>
    <h1>Expenses Table</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Payment Name</th>
          <th>Description</th>
          <th>Payment ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {income.map((item) => (
          <tr key={item.id}>
            <td>{item.payment_name}</td>
            <td>{item.description}</td>
            <td>{item.payment_id}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
}

export default IncomeTable;
