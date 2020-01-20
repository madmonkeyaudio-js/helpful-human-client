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

        let swatchProps = props.selectedSwatches;
        let allSwatches;
        let myDivPgs = [];
        let myArray = [[],[],[],[],[],[],[],[]];
        let jIterations = 16;
        let jInitial = 0;

           for(let i = 0; i < 8; i++){
               myDivPgs.push(i)
               for(let j = jInitial; j < jIterations + jInitial; j++){
                   let singleSwatch = swatchProps[j];
                   myArray[i].push(singleSwatch)
               }
                jInitial += 15;
            }
            
            allSwatches = myArray.map((array, index) => {
                return(
                    <div key={index} className="content-grid" id={`content${index}`}>
                        {array.map((a, idx)=> {
                            return (
                                <Swatch color={a} toggleDetail={props.toggleDetail} key={idx}/>
                            )
                        })}
                        <br/>
                    </div>
                )
            })
            
            return (
                <div className="content-and-pages">
                <div className="content-container">
                    {allSwatches}
                </div>
                    <NumberedPages changePage={props.changePage}/>
                </div>
            )
        }
    }


export default Content;