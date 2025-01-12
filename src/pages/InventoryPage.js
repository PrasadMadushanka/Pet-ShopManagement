import React, { useState } from "react";

import PetItemForm from "../components/Inventory/PetItemForm";
import MedicineForm from "../components/Inventory/MedicineForm";
import InventoryTable from "../components/Inventory/InventoryTable";

function InventoryPage() {

  const [showPetItemForm, setShowPetItemForm] = useState(false);
  const [showMedicineForm, setShowMedicineForm] = useState(false);
  return (
    <div>
         <header className="header">
      <center>VS Pet Care</center>
    </header>
    <div>
  <br></br>
  <br></br>
  <br></br>
    <button 
  className="modern-button" 
  onClick={() => setShowPetItemForm(!showPetItemForm)}
>
  {showPetItemForm ? "Hide Pet Item Form" : "➕ Add Pet Item"}
</button>


<button 
  className="modern-button" 
  onClick={() => setShowMedicineForm(!showMedicineForm)}
>
  {showMedicineForm ? "Hide Medicine Form" : "💊 Add Medicine"}
</button>


<center><h2>Pet Items Inventory</h2></center>
{showPetItemForm && <PetItemForm />}
    <InventoryTable type="pet_items" />
    <center><h2>Medicine Inventory</h2></center>
    {showMedicineForm && <MedicineForm />}
    <InventoryTable type="medicines" />
  </div>
  </div>
  );
}

export default InventoryPage;
