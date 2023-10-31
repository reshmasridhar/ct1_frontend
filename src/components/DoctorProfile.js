// src/components/DoctorProfile.js
import React from 'react';
import AppointmentForm from './AppointmentForm';

const DoctorProfile = ({ doctor, onAppointmentSubmit }) => {
  return (
    <div className='docprofile'>
      <h2>{doctor.name}</h2>
      <h2>{doctor.specialization}</h2>
      
     
      
      {/* Add more doctor information here */}
      <AppointmentForm doctor={doctor} onAppointmentSubmit={onAppointmentSubmit} />
    </div>
  );
};

export default DoctorProfile;

