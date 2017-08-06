import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className='homeDiv'>
          <NavBar />
          <div className='homePackageDiv'>
          </div>
        </div>
    )
  }
}

export default Home;
