// PatientPage.js
import React from 'react';
import { Route,Router } from 'react-router-dom';
import './PatientPage.css';

// Import components for different content sections
import Home from './Home';
//import AllDoctors from './AllDoctors';
//import ScheduleSessions from './ScheduleSessions';
//import MyBooking from './MyBooking';
//import Settings from './Settings';

const PatientPage = () => {
  return (
    <div className="patient-page">
      <div className="sidebar">
        <div className="profile">
          {/* Add patient's profile picture and name */}
          {/* You can customize this section */}
        </div>
       
      </div>
      <div className="content">
        <Router>
        <Route path="home" component={Home} />
        </Router>
          
         
        
      </div>
    </div>
  );
};

export default PatientPage;
