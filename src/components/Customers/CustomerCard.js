import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import "./CustomerCard.css";

function CustomerCard() {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null); // State for editing a customer

  useEffect(() => {
    const fetchCustomers = async () => {
      const snapshot = await getDocs(collection(db, "customers"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCustomer({ ...editCustomer, [name]: value });
  };

  const handleEditSave = async () => {
    try {
      const customerRef = doc(db, "customers", editCustomer.id);
      await updateDoc(customerRef, editCustomer);
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === editCustomer.id ? { ...customer, ...editCustomer } : customer
        )
      );
      setEditCustomer(null); // Close the edit form
      alert("Customer updated successfully!");
    } catch (error) {
      console.error("Error updating customer:", error);
      alert("Failed to update customer.");
    }
  };

  return (
    <div className="customer-container">
      {customers.map((customer) => (
        <div key={customer.id} className="customer-card">
          {customer.customer_photo && <img src={customer.customer_photo} alt="Customer" />}
          <div className="customer-card-content">
            <h3>{customer.customer_name}</h3>
            <p>
              <span>Contact:</span> {customer.contact_number}
            </p>
            <p>
              <span>Pet Type:</span> {customer.pet_type}
            </p>
            <p>
              <span>Age:</span> {customer.age}
            </p>
            <p>
              <span>Vaccine Details:</span> {customer.vaccine_details}
            </p>
            <p>
              <span>Special Notes:</span> {customer.special_notes}
            </p>
            <button onClick={() => setEditCustomer(customer)}>Edit</button>
          </div>
        </div>
      ))}

      {editCustomer && (
        <div className="edit-modal">
          <div className="edit-form">
            <h3>Edit Customer</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSave();
              }}
            >
              <input
                type="text"
                name="customer_name"
                placeholder="Customer Name"
                value={editCustomer.customer_name}
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="contact_number"
                placeholder="Contact Number"
                value={editCustomer.contact_number}
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="pet_type"
                placeholder="Pet Type"
                value={editCustomer.pet_type}
                onChange={handleEditChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={editCustomer.age}
                onChange={handleEditChange}
              />
              <textarea
                name="vaccine_details"
                placeholder="Vaccine Details"
                value={editCustomer.vaccine_details}
                onChange={handleEditChange}
              />
              <textarea
                name="special_notes"
                placeholder="Special Notes"
                value={editCustomer.special_notes}
                onChange={handleEditChange}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditCustomer(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerCard;
