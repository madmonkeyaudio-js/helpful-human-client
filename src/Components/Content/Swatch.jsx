import React from 'react'

function Swatch(props) {
    return (
        <div key={props.swatchKey} className="swatch">
            <div className="swatch-color" style={{backgroundColor: `#${props.color}`}}>
            </div>
            <div>
                <h5>{props.color}</h5>
            </div>
        </div>
    )
}

export default Swatch;
