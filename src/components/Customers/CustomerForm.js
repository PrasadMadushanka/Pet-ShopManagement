import { useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CustomerForm() {
  const [customer, setCustomer] = useState({
    customer_name: "",
    contact_number: "",
    pet_type: "",
    age: "",
    vaccine_details: "",
    special_notes: "",
  });
  //const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Validation
    if (!customer.customer_name || !customer.contact_number ) {
      alert("Please fill all required fields and upload a photo.");
      return;
    }

    try {
      setLoading(true);

      // Upload photo to Firebase Storage
      //const photoRef = ref(storage, `customerPhotos/${Date.now()}_${photo.name}`);
     // await uploadBytes(photoRef, photo);
     // const photoURL = await getDownloadURL(photoRef);
     // <label htmlFor="fileUpload" style={{ display: "block", marginBottom: "5px", fontSize: "12px" }}>
    // 📷 Upload your profile picture (JPG, PNG, Max: 2MB) *
     //</label>
     //<input
       //type="file"
       //accept="image/png, image/jpeg"
       //onChange={(e) => setPhoto(e.target.files[0])}
       //required
     ///>

      // Upload data to Firestore
      await addDoc(collection(db, "customers"), {
        ...customer,
       // customer_photo: photoURL,
        createdAt: new Date(),
      });

      alert("Customer Added Successfully!");
      
      // Reset form
      setCustomer({
        customer_name: "",
        contact_number: "",
        pet_type: "",
        age: "",
        vaccine_details: "",
        special_notes: "",
      });
      //setPhoto(null);
    } catch (error) {
      console.error("Error adding customer: ", error);
      alert("Failed to add customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <center>VS Pet Care</center>
      </header>

      <div className="login-box">
        <h1>Customer Registration</h1>

        <form onSubmit={handleSubmit}>
          <center>
            <input
              placeholder="Customer Name *"
              value={customer.customer_name}
              onChange={(e) => setCustomer({ ...customer, customer_name: e.target.value })}
              required
            />
            <input
              placeholder="Contact Number *"
              value={customer.contact_number}
              onChange={(e) => setCustomer({ ...customer, contact_number: e.target.value })}
              required
            />
            <input
              placeholder="Pet Type"
              value={customer.pet_type}
              onChange={(e) => setCustomer({ ...customer, pet_type: e.target.value })}
            />
            <input
              placeholder="Age"
              value={customer.age}
              onChange={(e) => setCustomer({ ...customer, age: e.target.value })}
            />
            <input
              placeholder="Vaccine Details"
              value={customer.vaccine_details}
              onChange={(e) => setCustomer({ ...customer, vaccine_details: e.target.value })}
            />
            <input
              placeholder="Special Notes"
              value={customer.special_notes}
              onChange={(e) => setCustomer({ ...customer, special_notes: e.target.value })}
            />
            
        

            <button type="submit" disabled={loading}>
              {loading ? "Uploading..." : "Add Customer"}
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}



export default CustomerForm;
