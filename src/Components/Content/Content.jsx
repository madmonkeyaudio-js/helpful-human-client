import React from 'react'

import Swatch from './Swatch'
import NumberedPages from '../Navigation/NumberedPgs'

function Content(props) {

    let randomSixteen;
    if(!props){
        return (
            <div>
                <h1>Sorry No Data here</h1>
            </div>
        )
    }

    if(props){
    
        let displayedSwatches = 16;
       
          
        let selectSixteen = props.colors.splice(0, 16);

        randomSixteen = selectSixteen.map((c, idx) => {
            return (
                <Swatch swatchKey={idx} color={c.hexId} toggleDetail={props.toggleDetail}/>
            )
        });
        

    }

    return (
        <div className="content-container">
            <div className="content-grid">
                {randomSixteen}
            </div>
            <NumberedPages/>
        </div>
    )
}

export default Content;