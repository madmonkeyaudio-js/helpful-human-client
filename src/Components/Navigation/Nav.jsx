import React from 'react'

class Nav extends React.Component {

    state = {
        randomColor: ''
    }

    selectRandomColor = () => {
        this.setState({
          randomColor: (this.props.colors[Math.floor(Math.random() * (this.props.colors.length - 1))].hexId)
        })
        console.log(this.state.randomColor)
      }

    render() {
        let colorList = this.props.colorNames.map((c, idx) => {
            return (
                <div key={idx}>
                    <h5>{c}</h5>
                </div>
            )
        })

        return (
            <div className="nav-container">
                <div className="reset-button" onClick={this.selectRandomColor}>
                    <a href={`#swatch${this.state.randomColor}`}><h5>Random Color</h5></a>
                </div>
                <div className="nav-select">
                    {colorList}
                </div> 
            </div>
        )
    }

}
    


export default Nav;
