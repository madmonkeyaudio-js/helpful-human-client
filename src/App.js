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
      this.colorsToDisplay(1);
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.selectedSwatches !== this.state.selectedSwatches){
      this.setState({
        selectedSwatches: this.state.selectedSwatches,
        colors: this.state.colors, 
        selectedColor: this.state.selectedColor,
        pageNumber: this.state.pageNumber,
        colorNames: this.state.colorNames 
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

  colorsToDisplay = (number) => {
    this.setState({
      pageNumber: number
    })
    let numOfSwatches = this.state.colors.length;
    let selectedSwatches = [];
    for(let i = 0; i < numOfSwatches; i++){
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
                changePage={this.colorsToDisplay}
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

