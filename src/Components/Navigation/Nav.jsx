import React from 'react'

function Nav(props) {
    let colorList = props.colorNames.map((c, idx) => {
        return (
            <div key={idx}>
                <h5>{c}</h5>
            </div>
        )
    })
    
    return (
        <div className="nav-container">
            <div className="reset-button">
                <h5>Random Color</h5>
            </div>
            <div className="nav-select">
                {colorList}
            </div> 
        </div>
    )
}

export default Nav;
