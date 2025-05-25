import React from 'react'

function Header() {
    return (
        <header className='row-header'>
            <div className='col-logo'>
                <span className="health"><h1>Health</h1></span>
                <span className="care"><h1>care.</h1></span>
            </div>
            <div className='col-search'>
                <input type="text" placeholder='Search' id='search' /><i><img src="bell.png" alt="notification" id='bell' /></i>
            </div>
            <div className='col-user'>
                <span className="user " style={{ border: "1px solid black", backgroundColor: "aqua", padding: "2px 8px", borderRadius: "6px", marginRight: "12px" }}>
                    <img src="/images/user.png" alt="user" id='user' />
                </span>
                <span className="notification" style={{
                    border: "1px solid black", width: "20px",
                    height: "24px", padding: "2px 8px", backgroundColor: "rgb(18 18 121)", borderRadius: "6px"
                }}>
                    <img src="/images/add.png" alt="add" id='add' />
                </span>
            </div>
        </header>
    )
}

export default Header