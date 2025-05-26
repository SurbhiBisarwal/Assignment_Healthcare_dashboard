import React from 'react';
import './appointment.css';
function Appointment(){
    return(
        <div className="upcoming-schedule">
           <div className='box-1'>
          <span className="details">Dentist</span>
          <span className="time">09:00-11:00</span>
          <span
  className="doctor"
  
>
  Dr. Cameron Williamson
</span>
        </div>
           <div className='box-2'>
          <span className="details">Physiotherapy Appointment</span>
          <span className="time">11:00-12:00</span>
          <span className="doctor">Dr.Kevin Djones</span>
       </div>
        </div>
    )
}
export default Appointment;