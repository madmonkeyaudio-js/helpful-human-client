import React, { Component } from 'react';
import axios from 'axios'

import Header from './Components/Header'
import Nav from './Components/Navigation/Nav'
import Content from './Components/Content/Content'
import DetailView from './Components/Content/DetailView'
import { SERVER } from './Constants'

import './App.css';

 class App extends Component {

  state = {
    colors: [],
    selectedSwatches: [],
    colorNames: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'],
    selectedColor: '',
    pageNumber: 1
  }


  componentDidMount() {
    axios.get(`${SERVER}/allColors`)
    .then(response => {
      this.setState({
        colors: response.data
      })
    }).then(() => {
      this.colorsToDisplay();
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.colors !== this.state.colors){
      this.colorsToDisplay();
      this.setState({
        colors: this.state.colors, 
        selectedColor: this.state.selectedColor,
        pageNumber: this.state.pageNumber,
        selectedSwatches: this.state.selectedSwatches
      })
    }
  }

  toggleDetail = (selected) => {
    if(!this.state.selectedColor){
      this.setState({
        selectedColor: selected
      })
    }
    else {
      this.setState({
        selectedColor: ''
      })
    }
  }

  changePage = (number) => {
    this.setState({
      pageNumber: number
    })
  }

  colorsToDisplay = () => {
    let numOfSwatches = 16;
    let selectedSwatches = [];
    for(let i = ((this.state.pageNumber * numOfSwatches)-numOfSwatches); i < (numOfSwatches * this.state.pageNumber); i++){
        selectedSwatches.push(this.state.colors[i].hexId)
    }
    this.setState({
      selectedSwatches
    })
  }

  render() {
    if(this.state.selectedColor === ""){
      return (
        <div className="App">
          <Header/>
          <div className="basic-flex">
            <Nav colorNames={this.state.colorNames}/>
              <Content 
                colors={this.state.colors} 
                toggleDetail={this.toggleDetail} 
                changePage={this.changePage}
                selectedSwatches={this.state.selectedSwatches}/>
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
              <DetailView 
                color={this.state.selectedColor} 
                toggleDetail={this.toggleDetail}/>
          </div>
        </div>
      )
    }
  }
}

export default App

