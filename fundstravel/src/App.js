import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom'

import './App.css';




import NavBar from "./components/NavBar/NavBar";

import Packages from './components/Packages/Packages';

import Signup from './components/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          
           <Route exact path="/signup" component={Signup} />

        </Switch>

      </div>
    );
  }
}



export default App;
