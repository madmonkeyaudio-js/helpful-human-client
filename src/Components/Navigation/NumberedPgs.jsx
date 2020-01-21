import React from 'react'

class NumberedPgs extends React.Component {

    state = {
        pages: [1, 2, 3, 4, 5, 6, 7, 8]
    }
    render() {

            let pages = this.state.pages.map((p, idx) => {
                return (
                    <div className="page-number" key={idx}>
                        <a href={`#page${p - 1}`}><h2>{p}</h2></a>
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