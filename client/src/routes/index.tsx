import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";
import Dashboard from "@/pages/admin/Dashboard";
import Settings from "@/pages/settings/Settings";
const AppRoutes = () => {
  return (
<Router>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
</Router>
)
}

export default AppRoutes