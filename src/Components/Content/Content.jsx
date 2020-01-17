import React from 'react'

import Swatch from './Swatch'

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
        console.log('wheeee have props!', props)
        let selectSixteen = props.colors.splice(0, 16);

        randomSixteen = selectSixteen.map((c, idx) => {
            return (
                <Swatch swatchKey={idx} color={c.hexId}/>
            )
        });
        

    }

    return (
        <div className="content-container">
            <div className="content-grid">
                {randomSixteen}
            </div>
        </div>
    )
}

export default Content;