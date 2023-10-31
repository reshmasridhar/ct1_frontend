// PatientPage.js
import React , { useState, useEffect } from 'react';
import './PatientPage.css';
import { Link } from 'react-router-dom';
//import MyBooking from './MyBooking'; // Update the import
import Footer from'./Footer';

// ... (rest of the PatientPage.js component remains the same)

const PatientPage = () => {
  //const { email } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div className="home-page">
      <div className="sidebar">
        <div className="profile">
          {/* Display patient's profile picture here */}
          <img src="https://tse2.mm.bing.net/th?id=OIP.DGePcjJ-RdJr7oivIaPxGgHaHa&pid=Api&P=0&h=180" alt="Patient" />
          <div>
      
      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
          {/* Add more user details here */}
        </div>
      )}
    </div>
          <Link to="/About">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button></Link>
          <br></br>
          <div className="separator">
  <hr />
</div>
          <br></br>
        </div>
        <ul className="nav-links">
        <li><Link to="/PatientPage">Home</Link></li>
          <br></br>
          <li><Link to="/AllDoctors">All Doctors</Link></li>
          <br></br>
          <li><Link to="/MyAppointments">My Bookings</Link></li>
          <br></br>
          
        </ul>
      </div>
      

      <div className="content">
        {/* Add patient page content here */}
        
        <div className="welcome-section">
        <div>
      
      {user && (
        <div>
          <h1>Welcome {user.username}</h1>
          
          {/* Add more user details here */}
        </div>
      )}
    </div>
         
          <h3>Find and manage your appointments here.</h3><br></br><br></br><br></br>
          <h5>Haven't any ideas about doctors? no problem let's jump to "All Doctors"</h5>
          <br></br>

          <h1>Channel a Doctor Here</h1>
            <br></br>
            <Link to="/AllDoctors">  
          <button className="app-button">
            Book Appointment
          </button>
          </Link>
        </div>
        <div className="appointment-summary">
          <h1>We offer you unparalleled excellence!</h1>
          
          <div className="card-container">
            {/* Cards with images and details */}
            <div className="card">
              <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card 1" />
              <h3>Patient Portals</h3>
             
              <p>Secure online platforms that allow patients to access their medical records and communicate with their healthcare providers.</p>
            </div>
            <div className="card">
              <img src="https://plus.unsplash.com/premium_photo-1675686363504-ba2df7786f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card 2"  style={{ height: '100%' }}/>
              <h3>User-Friendly Interface</h3>
              <p>A user-friendly website that simplifies the appointment booking process and provides a seamless customer experience.</p>
            </div>
            <div className="card">
              <img src="https://plus.unsplash.com/premium_photo-1663047154795-7af42ea29629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWwlMjBob3NwaXRhbCUyMGFuZCUyMGRvY3RvcnMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Card 3" />
              <h3>Access to Specialists</h3>
              <p>Connecting customers with a wide range of specialists and healthcare services, catering to diverse medical needs.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default PatientPage;
