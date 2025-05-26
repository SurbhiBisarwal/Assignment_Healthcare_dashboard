import './activity.css';

function ActivityFeed() {
  const data = [
    { day: "Mon", bars: ["#00DFFC", "#999", "#7367F0", "#b2e6e2"] },
    { day: "Tues", bars: ["#00DFFC", "#7367F0", "#999", "#b2e6e2"] },
    { day: "Wed", bars: ["#999", "#00DFFC", "#7367F0", "#b2e6e2"] },
    { day: "Thurs", bars: ["#999", "#00DFFC", "#7367F0", "#b2e6e2"] },
    { day: "Fri", bars: ["#00DFFC", "#7367F0", "#999", "#b2e6e2"] },
    { day: "Sat", bars: ["#999", "#00DFFC", "#7367F0", "#b2e6e2"] },
    { day: "Sun", bars: ["#00DFFC", "#999", "#7367F0", "#b2e6e2"] },
  ];

  return (
    <div className="activity-chart">
      <div className="activity-header">
        <span>Activity</span>
        <span className="activity-count">3 appointments on this week</span>
      </div>
      <div className="activity-bars">
        {data.map((item, index) => (
          <div className="activity-bar" key={index}>
            <div className="bar-container">
              {item.bars.map((color, idx) => (
                <div
                  key={idx}
                  className="bar"
                  style={{
                    height: `${Math.floor(Math.random() * 25 + 15)}px`,
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
