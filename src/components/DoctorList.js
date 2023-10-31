// src/components/DoctorList.js
import React from 'react';

const DoctorList = ({ doctors, onDoctorSelect  }) => {
  return (
    
    <div className='doclist'>
      <h2>Search Results</h2>
      <ul>
        
        {doctors.map((doctor) => (
          
          <div className="doctor-item" key={doctor.id}>
            
          <span className="doctor-name">{doctor.name} - {doctor.specialization}</span>
          <button className="select-button" onClick={() => onDoctorSelect(doctor)}>Select</button>
        </div>
      ))}
      </ul>
    </div>
  );
};

export default DoctorList;
