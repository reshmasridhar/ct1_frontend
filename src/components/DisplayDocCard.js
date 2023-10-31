import React from 'react';
import DoctorCard from './DoctorCard';
import doctors from '../data/doctors.js';
import './DoctorCard.css';

const DisplayDocCard = () => {
    return (
      <div className="doctors-container">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    );
  };
  
  export default DisplayDocCard;