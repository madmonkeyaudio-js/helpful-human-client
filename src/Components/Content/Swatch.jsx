import React from 'react'
import DetailView from './DetailView'
import {BrowserRoute as Router, Link, Switch, Route} from 'react-router-dom'

function Swatch(props) {

    return (
        <div key={props.swatchKey} className="swatch">
            <Link to="/detail">
            <div className="swatch-color" style={{backgroundColor: `#${props.color}`}}>
            </div>
            <div>
                <h5>{props.color}</h5>
            </div>
        </Link>
        <Switch>
            <Route 
                exact path='/detail' 
                render={(props) => <DetailView {...props} color={props.color}/>} />
        </Switch>
        </div>
    )
}

export default Swatch;
