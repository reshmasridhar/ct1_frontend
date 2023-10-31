import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyAppointments.css';
import './PatientPage.css';
import Footer from'./Footer';


const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null); // Add user state

  useEffect(() => {
    // Fetch the patient's appointments from the server
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/myAppointments', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Sort the appointments by appointmentDate in ascending order
          const sortedAppointments = data.sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
          setAppointments(sortedAppointments);
        })
        .catch((error) => {
          console.error('Error fetching appointments:', error);
        });
    }

    // Fetch user details
    fetchUserDetails(token);
  }, []);

  const fetchUserDetails = (token) => {
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
  };
  const handleLogout = () => {
    // Implement your logout logic here
  };
  const currentDate = new Date();

  const appointStyles = {
    backgroundColor: '#fff', // Background color
    padding: '20px', // Padding around the content
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a card-like effect
    borderRadius: '5px', // Rounded corners
    marginBottom: '20px', // Space between this section and other content
  };
  
  const appointTitleStyles = {
    fontSize: '24px', // Title font size
    fontWeight: 'bold', // Title font weight
    marginBottom: '20px', // Space below the title
  };
  
  const appointListStyles = {
    listStyleType: 'none', // Remove bullet points from the list
  };
  
  const appointListItemStyles = {
    marginBottom: '15px', // Space between each appointment item
  };
  return (
    <div className="home-page">
      <div className="sidebar">
        <div className="profile">
          {/* Display patient's profile picture here */}
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.DGePcjJ-RdJr7oivIaPxGgHaHa&pid=Api&P=0&h=180"
            alt="Patient"
          />
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
            </button>
          </Link>
          <br></br>
          <div className="separator">
            <hr />
          </div>
          <br></br>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/PatientPage">Home</Link>
          </li>
          <br></br>
          <li>
            <Link to="/AllDoctors">All Doctors</Link>
          </li>
          <br></br>
          <li>
            <Link to="/MyAppointments">My Bookings</Link>
          </li>
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
      
    
        <div className="appoint" style={appointStyles}>
          <h2 style={appointTitleStyles}>My Appointments</h2>
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <div className="appointment-sections">
              <div className="appointment-section past-appointments">
                <h3>Past Appointments</h3>
                {appointments
                  .filter((appointment) => new Date(appointment.appointmentDate) < currentDate)
                  .map((appointment, index) => (
                    <div key={index} style={appointListItemStyles}>
                      <p>Doctor: {appointment.doctorName}</p>
                      <p>Appointment Date: {appointment.appointmentDate}</p>
                      <p>Selected Slot: {appointment.selectedSlot}</p>
                    </div>
                  ))}
              </div>
              <div className="appointment-section present-appointments">
                <h3>Present Appointments</h3>
                {appointments
                  .filter((appointment) => new Date(appointment.appointmentDate).toDateString() === currentDate.toDateString())
                  .map((appointment, index) => (
                    <div key={index} style={appointListItemStyles}>
                      <p>Doctor: {appointment.doctorName}</p>
                      <p>Appointment Date: {appointment.appointmentDate}</p>
                      <p>Selected Slot: {appointment.selectedSlot}</p>
                    </div>
                  ))}
              </div>
              <div className="appointment-section upcoming-appointments">
                <h3>Upcoming Appointments</h3>
                {appointments
                  .filter((appointment) => new Date(appointment.appointmentDate) > currentDate)
                  .map((appointment, index) => (
                    <div key={index} style={appointListItemStyles}>
                      <p>Doctor: {appointment.doctorName}</p>
                      <p>Appointment Date: {appointment.appointmentDate}</p>
                      <p>Selected Slot: {appointment.selectedSlot}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default MyAppointments;
