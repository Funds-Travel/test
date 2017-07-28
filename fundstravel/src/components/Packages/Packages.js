import React, { Component } from 'react';
import axios from 'axios';

import './Packages.css';

export default class Packages extends Component {

    constructor(){
    	super();

    	this.state = {packages: [] };
    }
    componentWillMount() {
      axios.get('/api/packages').then( response => {
        // console.log(response.data);
        this.setState({packages: response.data}, () => {
          // console.log(this.state)
        })
      })
    }

    render() {

        const myPackages = this.state.packages.map(item => {
          return (
            <div className="eachPackageDiv" key={item.id}>
            <img src={item.hotel_image} alt={item.hote_name}/>

              <ul>
              <li >
                {item.hotel_name}<br />
                {item.hotel_location}
              </li>
              <li>
               Total Price of ${item.total_price} for {item.travelers} traveler(s)<br />
              <span className="descriptSpan">{item.hotel_description}</span>
              </li>
              </ul>
            </div>
          )
        })

      return (
        <div className="allPackagesDiv">
          <span>{myPackages}</span>
          </div>
      )
    }
}
