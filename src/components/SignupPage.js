// src/components/SignUpPage.js
import React, { useState } from 'react';

const SignUpPage = () => {
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
    specialization: '', // Additional field for doctors
    location: '',      // Additional field for doctors
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
    // Implement logic to submit the form based on userType
    if (userType === 'patient') {
      // Handle patient signup
      console.log('Patient Signup:', formData);
    } else if (userType === 'doctor') {
      // Handle doctor signup
      console.log('Doctor Signup:', formData);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="user-type-buttons">
        <button
          onClick={() => handleUserTypeChange('patient')}
          className={userType === 'patient' ? 'active' : ''}
        >
          Patient
        </button>
        <button
          onClick={() => handleUserTypeChange('doctor')}
          className={userType === 'doctor' ? 'active' : ''}
        >
          Doctor
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Contact:</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        {userType === 'doctor' && (
          <>
            <div>
              <label>Specialization:</label>
              <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} />
            </div>
            <div>
              <label>Location:</label>
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
            </div>
          </>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
