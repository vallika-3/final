import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import ReportForm from "./components/ReportForm";
import InvestigatorDashboard from "./components/investigatordashbord/InvestigatorDashboard";
import AthleteDetails from "./components/investigatordashbord/AthleteDetails";
import AthleteDashboard from "./components/atheletedashbord/AthleteDashboard";
import BiologicalPassportRecords from "./components/investigatordashbord/BiologicalPassportRecords";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Performance from "./components/investigatordashbord/Performance";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<div>Welcome to the dashboard!</div>} />
        <Route path="/investigator-dashboard" element={<InvestigatorDashboard />} />
        <Route path="/athlete-dashboard" element={<AthleteDashboard />} />

        {/* Athlete Details with Nested Routes */}
        <Route path="/athlete-details/:athleteId" element={<AthleteDetails />}>
          {/* Nested Routes for AthleteDetails */}
          <Route path="performance" element={<Performance />} />
          <Route path="biological-passport-records" element={<BiologicalPassportRecords />} />
          {/* Add more nested routes here */}
        </Route>

        {/* Miscellaneous */}
        <Route path="/report" element={<ReportForm />} />
      </Routes>
    </Router>
  );
}

export default App;