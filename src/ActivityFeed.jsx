
import './activity.css'
function ActivityFeed() {
    return (
        <div className="activity-chart">
            <div className="activity-header">
                <span>Activity</span>
                <span className="activity-count">3 appointments on this week</span>
            </div>
            <div className="activity-bars">


                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className="bar" style={{ height: "60px" }}><div></div><div></div></div>
                        <div className="bar" style={{ height: "10px" }}><div></div></div>
                        <div className="bar" style={{ height: "20px" }}><div></div></div>
                        <div className="bar" style={{ height: "30px" }}><div></div></div>
                    </div>
                    <span>Mon</span>
                </div>
                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className='bar-container-1'>
                            <div className="bar" style={{ height: "30px" }}></div>
                            <div className="bar" style={{ height: "30px" }}></div>
                        </div>
                        <div className="bar" style={{ height: "10px" }}></div>
                        <div className="bar" style={{ height: "20px" }}></div>
                        <div className="bar" style={{ height: "30px" }}></div>
                    </div>
                    <span>Tue</span>
                </div>
                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className="bar" style={{ height: "60px" }}></div>
                        <div className="bar" style={{ height: "10px" }}></div>
                        <div className="bar" style={{ height: "20px" }}></div>
                        <div className="bar" style={{ height: "30px" }}></div>
                    </div>
                    <span>Wed</span>
                </div>
                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className="bar" style={{ height: "60px" }}></div>
                        <div className="bar" style={{ height: "10px" }}></div>
                        <div className="bar" style={{ height: "20px" }}></div>
                        <div className="bar" style={{ height: "30px" }}></div>
                    </div>
                    <span>Thu</span>
                </div>
                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className="bar" style={{ height: "60px" }}></div>
                        <div className="bar" style={{ height: "10px" }}></div>
                        <div className="bar" style={{ height: "20px" }}></div>
                        <div className="bar" style={{ height: "30px" }}></div>
                    </div>
                    <span>Fri</span>
                </div>
                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className="bar" style={{ height: "60px" }}></div>
                        <div className="bar" style={{ height: "10px" }}></div>
                        <div className="bar" style={{ height: "20px" }}></div>
                        <div className="bar" style={{ height: "30px" }}></div>
                    </div>
                    <span>Sat</span>
                </div>
                <div className="activity-bar">
                    <div className='bar-container'>
                        <div className="bar" style={{ height: "60px" }}></div>
                        <div className="bar" style={{ height: "10px" }}></div>
                        <div className="bar" style={{ height: "20px" }}></div>
                        <div className="bar" style={{ height: "30px" }}></div>
                    </div>
                    <span>Sun</span>
                </div>


            </div>
        </div>
    )
}

export default ActivityFeed