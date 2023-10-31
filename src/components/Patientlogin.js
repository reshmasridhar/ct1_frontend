// src/components/LoginPage.js
import React, { useState } from 'react';
import {  Link,useNavigate } from 'react-router-dom';

import './LoginPage.css';
import Header from'../components/Header';
import Footer from'../components/Footer';

const Patientlogin = () => {
    //const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        alert('Please fill in all fields'); // Show an alert instead of using the error state
        return;
      }
  
      try {
        const response = await fetch('/Patientlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          navigate('/PatientPage');
        } else {
          alert('Invalid email or password'); // Show an alert for errors
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.'); // Show an alert for errors
      }
    };
 /*const navigate = useNavigate();
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
  };*/

  return (
    <div>
      <Header/>
    <div className="login-container">
      <h2>Login</h2><br></br><br></br>
      <div className="user-type-buttons">
        <button
         
          
        >
          Patient
        </button>
        
        
       
        
      </div>
      
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <br></br>
          <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
        </div>
        <div>
          <label>Password:</label>
          <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        <br></br>
        Don't have an account? <Link to="/PatientSignup">Sign Up</Link>
      </p>
    </div>
    <br></br><br></br>
    <Footer/>
    </div>
  );
};

export default Patientlogin;
