// src/AppRouter.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

import Finddocter from './components/FindDocter';
//import about from './components/about';
import DoctorSignup from './components/DoctorSignup';
import Patientlogin from './components/Patientlogin';
import PatientSignup from './components/PatientSignup';
import About from './components/About';
import Displaydoc from './components/Displaydoc';
import DoctorSearch from './components/DoctorSearch';
import PatientPage from './components/PatientPage';
import MyAppointmentNew from './components/MyAppointmentNew';


const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
      <Route path="/Header" element={<Header />} /> 
        <Route path="/" element={<HomePage />} /> {/* Use "element" prop */}
        <Route path="/login" element={<LoginPage />} /> {/* Use "element" prop */}
        <Route path="/DoctorSearch" element={<DoctorSearch />} /> {/* Use "element" prop */}
        <Route path="/PatientPage" element={<PatientPage />} /> {/* Use "element" prop */}
        <Route path="/Finddocter" element={<FindDocter />} /> {/* Use "element" prop */}
        <Route path="/DoctorProfilePage" element={<DoctorProfilePage />} />
        <Route path="/DoctorSignup" element={<DoctorSignup />} />
        <Route path="/Patientlogin" element={<Patientlogin />} />
        <Route path="/PatientSignup" element={<PatientSignup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Displaydoc" element={<Displaydoc />} />
        <Route path="/MyAppointmentNew" element={<MyAppointmentNew />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
