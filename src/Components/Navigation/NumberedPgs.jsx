import React from 'react'

class NumberedPgs extends React.Component {

    state = {
        pages: [1, 2, 3, 4, 5, 6, 7, 8]
    }
    render() {

        let pages = this.state.pages.map((p, idx) => {
            return (
                <a href={`#page${p - 1}`}>
                    <div className="page-number" key={idx}>
                        <h4>{p}</h4>
                    </div>
                </a>
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