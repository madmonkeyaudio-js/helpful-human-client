import React, { Component } from 'react';
import axios from 'axios'

import Header from './Components/Header'
import Nav from './Components/Navigation/Nav'
import Content from './Components/Content/Content'
import { SERVER } from './Constants'

import './App.css';

 class App extends Component {

  state = {
    colors: []
  }


  componentDidMount() {
    axios.get(`${SERVER}/allColors`)
    .then(response => {
      this.setState({
        colors: response.data
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.colors !== this.state.colors){
      this.setState({
        colors: this.state.colors
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <div className="basic-flex">
          <Nav/>
          <Content colors={this.state.colors}/>
        </div>
      </div>
    )
  }
}

export default App

