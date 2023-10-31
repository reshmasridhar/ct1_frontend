import React, { useState, } from 'react';
import { Link,useNavigate } from 'react-router-dom';
//import './SignupPage.css'; // Create a CSS file for styling
import Header from'../components/Header';
import Footer from'../components/Footer';

const SignupPage = () => {
   
    const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
  
    const navigate = useNavigate();
  
    const handleSignup = async (e) => {
      e.preventDefault();
      if (
      
        username === '' ||
      
        email === '' ||
        password === '' ||
        contactNumber === '' ) {
        alert('Please fill in all fields');
      } else {
        try {
          const response = await fetch('/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              
              username,
              
              email,
              password,
              contactNumber,
              
            }),
          });
        
          if (response.ok) {
            // Registration successful, now navigate based on userType
            
                navigate('/Patientlogin');
               
            } else {
            const data = await response.json();
            console.error(data); // Log the error response to the console
            alert('An error occurred during registration');
          }
        } catch (error) {
          console.error(error); // Log any unhandled exceptions to the console
          alert('An error occurred during registration');
        }
      }      
    };

  return (
    <div>
      <Header/>
    <div className="signup-container">
      <h2>Sign Up</h2>
      <br></br>
      <div className="user-type-buttons">
        <button
        >
          Patient
        </button>
        
      </div>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
        </div>
        <div>
          <label>Email:</label>
          <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
        </div>
        <div>
          <label>Contact:</label>
          <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
        </div>
        
        <div>
          <label>Password:</label>
          <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <br></br>
      <p>
        Already have an account? <Link to="/Patientlogin">Log in</Link>
      </p>
    </div>
    <br></br><br></br>
    <Footer/>
    </div>
  );
};

export default SignupPage;
