// MyBooking.js
import React , { useState, useEffect }from 'react';
import './PatientPage.css';
import { Link, useParams  } from 'react-router-dom';


const MyBooking = () => {
  const [appointments, setAppointments] = useState([]);
  const { email } = useParams();
  useEffect(() => {
    // Fetch appointments for the patient
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/bookings?email=${email}', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setAppointments(data);
        })
        .catch((error) => {
          console.error('Error fetching appointments:', error);
        });
    }
  }, [email]);

  
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

    <div>
    

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
          <li><Link to="/my-booking">My Bookings</Link></li>
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
            <Link to="/DoctorSearch">  
          <button className="app-button">
            Book Appointment
          </button>
          </Link>
        </div>
        <div className="appointment-summary">
        <div>
    <h2>My Appointments</h2>
    {appointments.length > 0 ? (
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <p>Date: {new Date(appointment.appointmentDate).toDateString()}</p>
            <p>Doctor: {appointment.doctorName}</p>
            <p>Time: {appointment.selectedSlot}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No appointments yet</p>
    )}
  </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyBooking;
