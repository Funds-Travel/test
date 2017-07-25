import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


import NavBar from "./components/NavBar/NavBar";

import Packages from './components/Packages/Packages';


class App extends Component {
  render() {
    return (
      <div className="App">

      <NavBar />


            <Packages />

      </div>
    );
  }
}

export default App;
