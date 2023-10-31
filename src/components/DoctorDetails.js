import React from 'react';

const DoctorDetails = ({ doctor }) => {
  return (
    <div className="doctor-details">
      <h2>Doctor Details</h2>
      <div className="doctor-info">
        <img src={doctor.photo} alt={doctor.name} />
        <h3>{doctor.name}</h3>
        <p>Specialization: {doctor.specialization}</p>
        <p>Experience: {doctor.experience} years</p>
        <p>Location:{doctor.location}</p>
        {/* Add more information here such as location, reviews, etc. */}
      </div>
    </div>
  );
};

export default DoctorDetails;
