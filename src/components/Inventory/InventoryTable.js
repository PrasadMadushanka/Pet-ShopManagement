import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function InventoryTable({ type }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const snapshot = await getDocs(collection(db, type));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    };

    fetchInventory();
  }, [type]);

  return (
    
    <center>
    <table border="1">
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Price</th>
          <th>Item Code</th>
          <th>Available Quantity</th>
          {type === "medicines" && <th>Expire Date</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.item_name || item.medicine_name}</td>
            <td>{item.price}</td>
            <td>{item.item_code}</td>
            <td>{item.available_quantity}</td>
            {type === "medicines" && <td>{item.expire_date}</td>}
          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
}

export default InventoryTable;
