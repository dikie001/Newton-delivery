import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";
import Dashboard from "@/pages/admin/Dashboard";
import Settings from "@/pages/settings/Settings";
import RequestPickupForm from "@/pages/request-pickup/PickupForm";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/request-pickup" element={<RequestPickupForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
