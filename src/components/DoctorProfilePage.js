// DoctorProfilePage.js
import React, { useState } from 'react';

const DoctorProfilePage = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="doctor-profile">
      <header>
        {/* Navbar */}
        <nav>
          <ul>
            {/* Profile Photo */}
            <li>
              <img src="doctor-profile-photo.jpg" alt="Profile" />
            </li>
            
            <li className="doctor-name">
      <span onClick={toggleDropdown}>Doctor Name</span>
      <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Appointment Schedule */}
        <section className="appointment-schedule">
          <h2>Appointment Schedule</h2>
          {/* Display the doctor's appointment schedule */}
        </section>
        {/* Other relevant sections */}
        {/* ... */}
      </main>
      
    </div>
  );
};

export default DoctorProfilePage;
