import React from 'react'

function NumberedPgs(props) {

    let numberOfPages = []
    let pages;
    for(let i = 1; i <= 8; i++){
        numberOfPages.push(i)
    }

    if(numberOfPages){
        pages = numberOfPages.map((p, idx) => {
            return (
                <div key={idx} onClick={() => props.changePage(p)} className="page-number">
                    <h3>{p}</h3>
                </div>
            )
        })
    }
    return (
        <div className="page-view">
            {pages}
        </div>
    )
}

export default NumberedPgs;