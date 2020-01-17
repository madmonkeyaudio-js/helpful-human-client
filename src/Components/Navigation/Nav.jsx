import React from 'react'

function Nav(props) {
    let colorList = props.colorNames.map((c, idx) => {
        return (
            <div key={idx}>
                <input type="submit" value={c}/>
            </div>
        )
    })
    
    return (
        <div className="nav-container">
            <div>
                <input type="submit" value="Random"/>
            </div>
            <div className="nav-select">
                {colorList}
            </div> 
        </div>
    )
}

export default Nav;
