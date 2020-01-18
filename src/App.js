import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './Components/Header'
import Nav from './Components/Navigation/Nav'
import Content from './Components/Content/Content'
import DetailView from './Components/Content/DetailView'
import { SERVER } from './Constants'

import './App.css';

 class App extends Component {

  state = {
    colors: [],
    colorNames: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'],
    selectedColor: ''
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

  selectColor = (selected) => {
    this.setState({
      selectedColor: selected
    })
  }

  clearColor = () => {
    this.setState({
      selectedColor: ''
    })
  }

  render() {
    if(this.state.selectedColor === ""){
      return (
        <div className="App">
          <Header/>
          <div className="basic-flex">
            <Nav colorNames={this.state.colorNames}/>
              <Content colors={this.state.colors} selectColor={this.selectColor}/>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Header/>
          <div className="basic-flex">
            <Nav colorNames={this.state.colorNames}/>
              <DetailView color={this.state.selectedColor} clear={this.clearColor}/>
          </div>
        </div>
      )
    }
  }
}

export default App

