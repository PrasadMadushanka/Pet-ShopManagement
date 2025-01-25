import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./pages/Dashboard";
import ExpensesPage from "./pages/ExpensesPage";
import IncomePage from "./pages/IncomePage";
import CustomersPage from "./pages/CustomersPage";
import InventoryPage from "./pages/InventoryPage";
import EmployeesPage from "./pages/EmployeesPage";
import CalendarPage from "./pages/CalendarPage";

function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>

      //test
    
  );
}

export default AppRoutes;

