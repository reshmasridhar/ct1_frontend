import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from'./components/Header';
import Footer from'./components/Footer';
import HomePage from './components/HomePage';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import FindDocter from './components/FindDocter';
import DoctorProfilePage from './components/DoctorProfilePage';
import About from './components/About';
import PatientPage from './components/PatientPage';
import DoctorSearch from './components/DoctorSearch';
import PatientSignup from './components/PatientSignup';
import DoctorSignup from './components/DoctorSignup';
import Patientlogin from './components/Patientlogin';
import Doctorlogin from './components/Doctorlogin';
import Displaydoc from './components/Displaydoc';
import AllDoctors from './components/AllDoctors';
import MyAppointments from './components/MyAppointments';
import OurDoctors from './components/OurDoctors';
//import ScheduleSessions from './components/ScheduleSessions';
import MyBooking from './components/MyBooking';
//import Settings from './components/Settings';

//import DoctorList from './components/DoctorList'
function App() {
  
  return (
    <Router>
       
       
        <Routes>
      
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/About" element={<About/>}/>
        <Route path="/FindDocter" element={<FindDocter/>}/>
        <Route path="/DoctorSearch" element={<DoctorSearch/>}/>
        <Route path="/DoctorProfilePage" element={<DoctorProfilePage/>}/>
        <Route path="/PatientPage" element={<PatientPage/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
            <Route path="/SignupPage" element={<SignupPage/>}/>
            <Route path="/PatientSignup" element={<PatientSignup/>}/>
            <Route path="/DoctorSignup" element={<DoctorSignup/>}/>
            <Route path="/Patientlogin" element={<Patientlogin/>}/>
            <Route path="/Displaydoc" element={<Displaydoc/>}/>
            <Route path="/Doctorlogin" element={<Doctorlogin/>}/>
            <Route path="/AllDoctors" element={<AllDoctors/>}/>
            <Route path="/MyAppointments" element={<MyAppointments/>}/>
            <Route path="/OurDoctors" element={<OurDoctors/>}/>
           
            <Route path="my-booking" element={<MyBooking />} />
           
            


        </Routes>
        
    </Router>
    
  );
}

export default App;
