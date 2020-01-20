import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

class NumberedPgs extends React.Component {

    state = {
        pages: [1, 2, 3, 4, 5, 6, 7, 8]
    }
    render() {

            let pages = this.state.pages.map((p, idx) => {
                return (
                    <div className="page-number">
                        <a href={`#content${p - 1}`}>{p}</a>
                    </div>
                    )
                })

                
        
        return (
            <div className="page-view">
                    {pages}
            </div>
        )
    }
}

export default NumberedPgs;