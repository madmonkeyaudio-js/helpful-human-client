import React from 'react'

function DetailView(props) {
    return (
        <div>
            This is the detail view
            <div className="swatch" style={{backgroundColor: `#${props.color}`}}>

            </div>

        </div>
    )
}

export default DetailView;