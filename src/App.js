import React from 'react';
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Pages/Footer";
import ManageApplicationInternship from './Admin/ManageApplicationInternship';
import InternshipCard from './Frontend/Internship/InternshipCard';
import WhatOffer from './Components/WhatOffer';

function App() {
  return (
    <>
      <Router>
        <InternshipCard /> 
      <ConditionalNavbar />
        <Home/>
        <WhatOffer/>
     
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/manage" element={<ManageApplicationInternship />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </>
  );
}

// Conditionally render Navbar based on the current route
const ConditionalNavbar = () => {
  const location = useLocation();
  // Show Navbar only if the path is not '/' (Login page) or '/manage'
  return location.pathname === "/dashboard" ? <Navbar/>: null;
};

// Conditionally render Footer based on the current route
const ConditionalFooter = () => {
  const location = useLocation();
  // Show Footer only on the /dashboard route
  return location.pathname === "/dashboard" ? <Footer /> : null;
};

export default App;
