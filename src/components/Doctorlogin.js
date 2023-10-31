// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './LoginPage.css';


const LoginPage = () => {
 
 const navigate = useNavigate();
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the login form based on userType
    if (userType === 'patient') {
      navigate('/patientPage' );
      // Handle patient login
      //history.push('/patient');
      console.log('Patient Login:', formData);
    } else if (userType === 'doctor') {
      // Handle doctor login
      console.log('Doctor Login:', formData);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2><br></br><br></br>
      <div className="user-type-buttons">
      <Link to="/Patientlogin"><button
    
    >
      Patient
    </button></Link>
        
        <button
          onClick={() => handleUserTypeChange('doctor')}
          className={userType === 'doctor' ? 'active' : ''}
        >
          Doctor
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br></br><br></br>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
