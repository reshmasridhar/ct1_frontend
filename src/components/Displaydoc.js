import React from 'react';
import Rating from 'react-rating-stars-component';
import './Displaydoc.css';
const DoctorCard = ({ doctor }) => {
  const { name, specialty, image, rating, details } = doctor;

  return (
    <div>
        
    <div className="doctor-card">
      <img src={image} alt={name} className="doctor-image" />
      <div className="doctor-details">
        <h3>{name}</h3>
        <p>{specialty}</p>
        <Rating
          count={5}
          value={rating}
          size={24}
          edit={false} // Disable editing of the rating
        />
        <p>{details}</p>
      </div>
    </div>
    </div>
  );
};

const Dispdoc = () => {
  const doctors = [
    // Your doctor data here
  ];

  return (
    <div className="app">
      <div className="doctor-grid">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Dispdoc;
