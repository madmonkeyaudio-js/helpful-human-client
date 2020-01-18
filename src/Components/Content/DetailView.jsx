import React from 'react'

function DetailView(props) {
    return (
        <div className="detail-container">
            <div className="swatch-detail" >
               <div className="swatch-color" style={{backgroundColor: `#${props.color}`}}>
               </div>
               <div>
                    <h3>{props.color}</h3>
               </div>
            </div>
            <div>
                All other colors
            </div>
            <div className="reset-button" onClick={props.toggleDetail}>
                Clear
            </div>
        </div>
    )
}

export default DetailView;