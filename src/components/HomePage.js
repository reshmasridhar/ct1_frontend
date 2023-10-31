import React from 'react';
import { Link } from 'react-router-dom';
import Header from'../components/Header';
import Footer from'../components/Footer';
import './Home.css';



const HomePage = () => {
  
  return (
    <div>
    <Header/>
    <div className="homepage"  style={{ height: '500px' }}>
      
      <div className="content">
        <br></br><br></br><br></br><br></br>
        <h1>Avoid Hassles & Delays.</h1><br></br>
        <p>How is health today,Sounds like not good!.</p>
        <p>Dont worry.Find your doctor as you wish with us.</p>
        <p>We offer you a free channeling service,Make appointment now.</p><br></br>
        <Link to="/Patientlogin">
        <button className="make-appointment-btn" >Make Appointment</button>
        </Link>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
