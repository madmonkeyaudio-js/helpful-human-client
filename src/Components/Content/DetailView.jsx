import React from 'react'

function DetailView(props) {

    return (
        <div className="detail-container">
            <div className="swatch-detail" >
               <div className="swatch-color" style={{backgroundColor: `#${props.color}`}}>
               </div>
               <div className="swatch-label">
                    <p>{`#${props.color}`}</p>
               </div>
            </div>
            <div>
                All other shadings
            </div>
            <div className="clear-button" onClick={props.toggleDetail}>
                <h3>Clear</h3>
            </div>
        </div>
    )
}

export default DetailView;