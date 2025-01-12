import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function PetItemForm() {
  const [item, setItem] = useState({
    item_name: "",
    price: "",
    item_code: "",
    available_quantity: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "pet_items"), item);
      alert("Pet Item Added!");
    } catch (error) {
      console.error("Error adding pet item: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Item Name" onChange={(e) => setItem({ ...item, item_name: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setItem({ ...item, price: e.target.value })} />
      <input placeholder="Item Code" onChange={(e) => setItem({ ...item, item_code: e.target.value })} />
      <input type="date" placeholder="Expire Date" onChange={(e) => setItem({ ...item, expire_date: e.target.value })} />
      <input placeholder="Available Quantity" type="number" onChange={(e) => setItem({ ...item, available_quantity: e.target.value })} />
      <button type="submit">Add Pet Item</button>
    </form>
  );
}

export default PetItemForm;
