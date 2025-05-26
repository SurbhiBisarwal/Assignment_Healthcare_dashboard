import React from 'react';
import './calender.css';
import data from "./data.json";
function CalendarView() {
    const highlightDay = "Thu";
    return (
        
        <div className="calendar-view">
          <div className="calendar-header">
            <h3>October 2021</h3>
            <span className="calendar-navigation">
              <button>&lt;</button>
              <button>&gt;</button>
            </span>
          </div>
          <div className="calendar-grid">
            {data.days.map((day, index) => (
              <div
                key={index}
                className="day"
                style={day === "Sun"
    ? { color: "grey" }
    : day === highlightDay
    ? { backgroundColor: "#e6f7ff", borderRadius: "5px" }
    : {}}
              >
                {day}
              </div>
            ))}
            {data.dates.map((item, index) => (
              <React.Fragment key={index}>
                <div>
                <div
                  className="date"
                  style={item.greyedOut ? { color: "grey" } : {}}
                >
                  {item.date}
                </div>
                <br />
                <div className="availableTime" 
                  style={item.greyedOut ? { color: "grey" } : {}}>
                  {item.availableTimes.map((time, idx) => (
                    <div key={idx}>{time}</div>
                  ))}
                </div>
             
                </div>
                
              </React.Fragment>
            ))}
          </div>
        </div>
      );
}
export default CalendarView;