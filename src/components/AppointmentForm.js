import React, { useState, useEffect  } from 'react';
import { useParams  } from 'react-router-dom';
import AppointmentConfirmation from './AppointmentConfirmation';
import Swal from 'sweetalert2';



const AppointmentForm = ({ doctor, onAppointmentSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [user, setUser] = useState(null);
  const { email } = useParams();
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  
  const handleConfirmationOpen = () => {
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };
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
  const handleAppointmentConfirm = async () => {
    // Implement logic to submit the appointment
    const appointmentData = {
      doctorName: doctor.name,

      patientName: user ? user.username:patientName,
      patientEmail: user ? user.email : patientEmail,
      appointmentDate,
      selectedSlot,
    };
// Send a POST request to the backend API to save the appointment
    try {
      const response = await fetch('/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        Swal.fire('Your appointment is confirmed', '', 'success');
        setConfirmationOpen(false);
        onAppointmentSubmit(appointmentData);
      } else {
        Swal.fire('Error saving appointment', '', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error saving appointment', '', 'error');
    }
  

    // After submission, you can show the SweetAlert confirmation

    // For this example, I'm showing a simple alert
    //Swal.fire("Your appointment is confirmed", "", "success");

    // Close the confirmation modal
    setConfirmationOpen(false);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setAppointmentDate(selectedDate);

    // Generate available slots based on the selected date (morning and evening slots)
    const morningSlots = generateSlots(selectedDate, 'morning');
    const eveningSlots = generateSlots(selectedDate, 'evening');

    setAvailableSlots([...morningSlots, ...eveningSlots]);
    setSelectedSlot('');
  };
  
  const handleSlotSelect = (slot, event) => {
    event.preventDefault();
    setSelectedSlot(slot);
  };
  


  const generateSlots = (date, timeOfDay) => {
    const slots = [];
    const startTime = timeOfDay === 'morning' ? 10 : 18; // Adjust start time for morning/evening
    const slotDuration = 15; // Slot duration in minutes

    for (let i = 0; i < 10; i++) {
      const hour = startTime + Math.floor(i * slotDuration / 60);
      const minute = (i * slotDuration) % 60;
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const slot = `${formattedHour}:${formattedMinute}`;
      slots.push(slot);
    }

    return slots;
  };

  const handleSubmit = () => {
    // Implement logic to submit the appointment, e.g., call an API or update state
    const appointmentData = {
      doctorId: doctor.id,
      patientName,
      patientEmail,
      appointmentDate,
      selectedSlot: availableSlots[0],
    };

    onAppointmentSubmit(appointmentData);
  };

  return (
    <div className='appform'>
      <h2>Schedule Appointment</h2>
      <form onSubmit={handleSubmit}>
      {user && (<div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>)}
        {user && ( <div>
          <label>Patient Email:</label>
          <input
            type="text"
            value={user.email} 
            onChange={(e) => setPatientEmail(e.target.value)}
          />
        </div>)}
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={handleDateChange}
          />
        </div>
        <div >
          <label>Select Time Slot:</label>
          <div className="time-slots">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                className={selectedSlot === slot ? 'selected' : ''}
                onClick={(e) => handleSlotSelect(slot,e)}
              >
                {slot}
              </button>
            ))}
          </div>
        
        </div>
        <button type="button" onClick={handleConfirmationOpen}>Schedule</button>
        <AppointmentConfirmation
        isOpen={isConfirmationOpen}
        onCancel={handleConfirmationClose}
        onConfirm={handleAppointmentConfirm}
        appointmentData={{
          doctorId: doctor.id,
          patientName,
          appointmentDate,
          selectedSlot,
        }}
        
      />
      </form>
    </div>
  );
};

export default AppointmentForm;