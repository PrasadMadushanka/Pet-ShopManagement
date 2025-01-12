import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function MedicineForm() {
  const [medicine, setMedicine] = useState({
    medicine_name: "",
    price: "",
    expire_date: "",
    item_code: "",
    available_quantity: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "medicines"), medicine);
      alert("Medicine Added!");
    } catch (error) {
      console.error("Error adding medicine: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Medicine Name" onChange={(e) => setMedicine({ ...medicine, medicine_name: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setMedicine({ ...medicine, price: e.target.value })} />
      <input type="date" placeholder="Expire Date" onChange={(e) => setMedicine({ ...medicine, expire_date: e.target.value })} />
      <input placeholder="Item Code" onChange={(e) => setMedicine({ ...medicine, item_code: e.target.value })} />
      <input placeholder="Available Quantity" type="number" onChange={(e) => setMedicine({ ...medicine, available_quantity: e.target.value })} />
      <button type="submit">Add Medicine</button>
    </form>
  );
}

export default MedicineForm;
