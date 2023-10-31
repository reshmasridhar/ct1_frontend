// src/components/AppointmentConfirmation.js
import React, { useState,useEffect }  from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AppointmentConfirmation = ({ isOpen, appointmentData, onConfirm, onCancel }) => {

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
  return (
    <Modal
      isOpen={isOpen}
      className="confirmation-modal"
      overlayClassName="confirmation-overlay"
      onRequestClose={onCancel}
      contentLabel="Appointment Confirmation"
    >
      <div className="confirmation-content">
        <h2>Confirm Appointment</h2>
        
        {user && ( <p>Patient Name: {user.username}</p>)}
        
        <p>Appointment Date: {appointmentData.appointmentDate}</p>
        <p>Selected Time Slot: {appointmentData.selectedSlot}</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm}>Book Appointment</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default AppointmentConfirmation;
