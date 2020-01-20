import React from 'react'

function Swatch(props) {

    return (
        <div className="swatch" onClick={() => props.toggleDetail(props.color)}>
            <div className="swatch-color" style={{backgroundColor: `#${props.color}`}}>
            </div>
            <div>
                <>{props.color}</>
            </div>
        </div>
    )
}

export default Swatch;
