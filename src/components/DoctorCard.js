import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.photo} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Rating: {doctor.rating}</p>
      <p>Experience: {doctor.experience} years</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DoctorCard;
