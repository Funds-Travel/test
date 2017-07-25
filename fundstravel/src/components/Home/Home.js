import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Home.css'

import Packages from '../Packages/Packages';
import NavBar from '../NavBar/NavBar'


export default class Home extends Component {

  render() {
    return (
        <div className='homeDiv'>
          <NavBar />

          <div className='homePackageDiv'>
            <Packages />
          </div>
        </div>
    )
  }
}
