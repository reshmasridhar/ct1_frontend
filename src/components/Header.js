import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const navigate=useNavigate();
  const navigateToLogin = () =>{
    navigate("/Patientlogin");
  }
  const navigateToAbout = () =>{
    navigate("/About");
  }
  const navigateToDispdoc = () =>{
    navigate("/Displaydoc");
  }
  //const navigateToDocsearch = () =>{
   // navigate("/DoctorSearch");
  //}
  //const navigateToPatientpage = () =>{
    //navigate("/PatientPage");
  //}
  const navigateToSignup = () =>{
    navigate("/PatientSignup");
  }
  const navigateToOurDoctors = () =>{
    navigate("/OurDoctors");
  }

  return (
    <div className="homepage">
      <div className="header">
        <div className="logo">
          <img src="https://github.com/yashrif/doclab-frontend/raw/main/src/assets/img/logo.png" alt=" Logo" />

        </div>
        <div className='nav-center'>
        

        </div>
        <div className="nav">
        <a href="/About" onClick={navigateToAbout}>About</a>
       
       
        
        <a href="/OurDoctors"onClick={navigateToOurDoctors}>OurDoctors</a>
         
          <a href="/PatientSignup"onClick={navigateToSignup}>Signup</a>
          <a href="/Patientlogin" onClick={navigateToLogin}>login</a>

         
          
        </div>
      </div>
      
      
      
    </div>
  );
};

export default Header;