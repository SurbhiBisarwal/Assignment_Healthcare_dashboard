import './upcomingSchedule.css';
import React from 'react';
const ScheduleCard = ({ title, time, icon }) => (
    <div className="schedule-card">
      <div className="schedule-title">{title} <span>{icon}</span></div>
      <div className="schedule-time">{time}</div>
    </div>
  );
function UpcomingSchedule(){
    return(
        <div className='mainBox'>
<span className="schedule-header">The Upcoming Schedule</span>
<div className="schedule-section">
  <span className="schedule-day">On Thursday</span>
  <div className='card'>
<div ><ScheduleCard title="Health checkup complete" time="11:00 AM" icon="🩺" />
</div>
<div ><ScheduleCard title="Ophthalmologist" time="14:00 PM" icon="👁️" /></div>
</div></div>

<div className="schedule-section">
  <span className="schedule-day">On Saturday</span>
  <div className='card'>
<div ><ScheduleCard title="Cardiologist" time="12:00 AM" icon="❤️" /></div>
<div ><ScheduleCard title="Neurologist" time="16:00 PM" icon="👨‍⚕️" /></div>
</div>
</div>
        </div>
    )
} 
export default UpcomingSchedule;