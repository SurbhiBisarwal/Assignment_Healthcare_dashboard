import DashboardOverview from './DashboardOverview.jsx'
import ActivityFeed from './ActivityFeed.jsx'

import './dashboardMainContent.css'

function DashboardMainContent() {
    return (

        <div className='col-dashboard-main-content'>
            <div ><DashboardOverview /></div>
            <div className='activity'><ActivityFeed /></div>
        </div>

    )
}

export default DashboardMainContent