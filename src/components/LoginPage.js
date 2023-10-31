// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import './LoginPage.css';


const LoginPage = () => {
 // const history = useHistory();
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
        <button
          onClick={() => handleUserTypeChange('patient')}
          className={userType === 'patient' ? 'active' : ''}
        >
          Patient
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
