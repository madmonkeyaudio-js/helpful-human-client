import React, { Component } from 'react';
import axios from 'axios'

import Nav from './Components/Navigation/Nav'
import Content from './Components/Content/Content'

import './App.css';

 class App extends Component {

  state = {
    colors: []
  }


  componentDidMount() {
    axios.get('')
    .then(response => {
      console.log(response)
    })
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      </header>
      <div className="basic-flex">
        <Nav/>
        <Content/>
      </div>
      </div>
    )
  }
}

export default App

