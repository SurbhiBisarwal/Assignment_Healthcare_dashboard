import React from 'react'
import './dashboardOverview.css';

function DashboardOverview() {
    return (
        <div className='dashboard-overview'>
            <div>
                <h2 style={{ color: "darkblue", marginLeft: "24px", marginTop: "0%" }}>Dashboard</h2>
            </div>
            <div className='row-dashboard'>
                <div className='col-1-dashboard'>
                    <img src="/images/anatomy.png" alt="anatomy" id='anatomy' />
      <div className="label heart-label">
        ❤️ <span>Healthy Heart</span>
      </div>
      <div className="label leg-label">
        🦵 <span>Healthy Leg</span>
      </div>
                </div>

                <div className='col-2-dashboard'>

                    <div className='healthStatus'>
                        <div className="healthStatus-img-wrapper">
                            <img src="/images/lung.jpg" alt="lung" id='healthStatusImg' />
                            LUNGS
                        </div>
                        <div style={{ color: "#bdb9b9", margin: 0, fontWeight: "normal" }}>Date:26 OCT 2021</div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "70%", background: "darkred" }}></div>
                        </div>
                    </div>

                    <div className='healthStatus'>
                        <div className="healthStatus-img-wrapper">
                            <img src="/images/tooth.jpg" alt="tooth" id='healthStatusImg' />
                            TEETH
                        </div>
                        <div style={{ color: "#bdb9b9", margin: 0, fontWeight: "normal" }}>Date:26 OCT 2021</div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "70%", background: "#00bfae" }}></div>
                        </div>
                    </div>
                    <div className='healthStatus'>
                        <div className="healthStatus-img-wrapper">
                            <img src="/images/bone.jpg" alt="bone" id='healthStatusImg' />
                            BONES
                        </div>
                        <div style={{ color: "#bdb9b9", margin: 0, fontWeight: "normal" }}>Date:26 OCT 2021</div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "70%", background: "darkorange" }}></div>
                        </div>
                    </div>
                    <div className='detail-wrapper'>
                        <div className='detail'>Detail</div>
                        <img src="/images/arrow.png" alt="forward" style={{ marginLeft: "8px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardOverview