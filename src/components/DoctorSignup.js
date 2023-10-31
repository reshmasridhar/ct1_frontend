import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './SignupPage.css'; // Create a CSS file for styling

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [userType, setUserType] = useState('patient');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the signup form for patients or doctors
    console.log(`${userType} Signup:`, formData);
    // You can send the form data and user type to your backend for registration here

    // Optionally, you can redirect the user to the login page after successful signup
    // Example: history.push('/login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="user-type-buttons">
        

        <Link to="/PatientSignup"><button
    
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
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default DoctorSignup;
