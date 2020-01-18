import React from 'react'

import Swatch from './Swatch'
import NumberedPages from '../Navigation/NumberedPgs'

function Content(props) {
    
    if(!props.colors){
        return (
            <div>
                <h1>Sorry No Data here</h1>
            </div>
        )
    }

    if(props.selectedSwatches){

        for(let i = 0; i < (props.selectedSwatches/16); i++) {
            
        }
            let sixteenSwatches = props.selectedSwatches.map((s, idx) => {
                return (
                    <Swatch key={idx} toggleDetail={props.toggleDetail} color={s}/>
                )
            })
            return (
                <div className="content-container">
                    <div className="content-grid">
                        {sixteenSwatches}
                    </div>
                    <NumberedPages changePage={props.changePage}/>
                </div>
            )
        }
    }


export default Content;