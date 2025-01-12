import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./CustomerCard.css";

function CustomerCard() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const snapshot = await getDocs(collection(db, "customers"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

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
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerCard;
