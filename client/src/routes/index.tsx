import Dashboard from "@/pages/admin/Dashboard";
import HomePage from "@/pages/home/HomePage";
import RequestPickupForm from "@/pages/request-pickup/PickupForm";
import Settings from "@/pages/settings/Settings";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/request-pickup" element={<RequestPickupForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
