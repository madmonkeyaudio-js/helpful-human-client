import React from 'react'

class Nav extends React.Component {

    state = {
        randomColor: ''
    }

    selectRandomColor = () => {
        this.setState({
          randomColor: (this.props.colors[Math.floor(Math.random() * (this.props.colors.length - 1))].hexId)
        })
      }

    render() {
        let colorList = this.props.colorNames.map((c, idx) => {
            return (
                <div key={idx} className="color-name">
                    <h5>{c}</h5>
                </div>
            )
        })

        return (
            <div className="nav-container">
                 <a href={`#swatch${this.state.randomColor}`}>
                <div className="reset-button" onClick={this.selectRandomColor}>
                   <h5>Random Color</h5>
                </div>
                </a>
                <div className="nav-select">
                    {colorList}
                </div> 
            </div>
        )
    }

}
    


export default Nav;
