import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";  // Future use
//import DashboardPage from "./pages/DashboardPage"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} /> {/* Default page */}
        <Route path="/login" element={<LoginPage />} /> {/* Future login page */}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> Future dashboard page */}
      </Routes>
    </Router>
  );
}

export default App;
