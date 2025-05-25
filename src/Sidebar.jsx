

function Sidebar() {
    return (
        <div className="sidebar
        ">
            <div>
                <h5>General</h5>
                <ul>
                    <li> Dashboard</li>
                    <li>History</li>
                    <li>Calendar</li>
                    <li>Appointments</li>
                    <li>Statistics</li>
                </ul>
            </div>
            <div>
                <h5>Tool</h5>
                <ul >
                    <li>Chat</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="setting" >Setting</div>

        </div>

    )
}

export default Sidebar