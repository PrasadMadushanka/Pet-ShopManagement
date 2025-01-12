import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import CustomersPage from "./CustomersPage";
import InventoryPage from "./InventoryPage";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Pet Shop Management</h1>
      <div className="dashboard-grid">
        <Link to="/expenses" className="dashboard-card">
          <img src="/images/expenses.jpg" alt="Expenses" />
          <h3>Expenses</h3>
        </Link>
        <Link to="/income" className="dashboard-card">
          <img src="/images/income.webp" alt="Income" />
          <h3>Income</h3>
        </Link>
        <Link to="/customers" className="dashboard-card">
          <img src="/images/customers.jpg" alt="Customers" />
          <h3>Customers</h3>
        </Link>
        <Link to="/inventory" className="dashboard-card">
          <img src="/images/inventory.png" alt="Inventory" />
          <h3>Inventory</h3>
        </Link>
        <Link to="/employees" className="dashboard-card">
          <img src="/images/employees.png" alt="Employees" />
          <h3>Employees</h3>
        </Link>
        <Link to="/calendar" className="dashboard-card">
          <img src="/images/calendar.webp" alt="Employees" />
          <h3>Schedular</h3>
        </Link>
      </div>
      <div>
      <CustomersPage />
      <InventoryPage />
      
      </div>
     
    </div>
  );
}

export default Dashboard;
