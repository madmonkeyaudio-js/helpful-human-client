import React from 'react'

function NumberedPgs() {

    let numberOfPages = []
    let pages;
    for(let i = 0; i <= 8; i++){
        numberOfPages.push(i)
    }

    if(numberOfPages){
        pages = numberOfPages.map((p, idx) => {
            return (
                <div key={idx}>
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