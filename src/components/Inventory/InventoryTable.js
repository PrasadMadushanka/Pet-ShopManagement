import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

function InventoryTable({ type }) {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to track the item being edited

  useEffect(() => {
    const fetchInventory = async () => {
      const snapshot = await getDocs(collection(db, type));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    };

    fetchInventory();
  }, [type]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  const handleEditSave = async () => {
    try {
      const itemRef = doc(db, type, editItem.id);
      await updateDoc(itemRef, editItem);
      setItems((prev) =>
        prev.map((item) =>
          item.id === editItem.id ? { ...item, ...editItem } : item
        )
      );
      setEditItem(null); // Close the edit form
      alert("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item.");
    }
  };

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
            <th>Actions</th>
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
              <td>
  <button
    onClick={() => setEditItem(item)}
    style={{
      padding: "8px 16px",
      backgroundColor: "#218838",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#218838";
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#28a745";
      e.target.style.transform = "scale(1)";
    }}
  >
    Edit
  </button>
</td>

            </tr>
          ))}
        </tbody>
      </table>

      {editItem && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3>Edit Item</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditSave();
            }}
          >
            <input
              type="text"
              name="item_name"
              placeholder="Name"
              value={editItem.item_name || editItem.medicine_name || ""}
              onChange={handleEditChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={editItem.price || ""}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="item_code"
              placeholder="Item Code"
              value={editItem.item_code || ""}
              onChange={handleEditChange}
            />
            <input
              type="number"
              name="available_quantity"
              placeholder="Available Quantity"
              value={editItem.available_quantity || ""}
              onChange={handleEditChange}
            />
            {type === "medicines" && (
              <input
                type="date"
                name="expire_date"
                placeholder="Expire Date"
                value={editItem.expire_date || ""}
                onChange={handleEditChange}
              />
            )}
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditItem(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </center>
  );
}

export default InventoryTable;
