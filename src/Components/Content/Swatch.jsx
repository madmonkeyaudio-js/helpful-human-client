import React from 'react'

function Swatch(props) {
    return (
        <div key={props.swatchKey} className="swatch">
            <div className="swatch-color" style={{backgroundColor: `#${props.color}`}}>

            </div>
            <p>{props.color}</p>
        </div>
    )
}

export default Swatch;
