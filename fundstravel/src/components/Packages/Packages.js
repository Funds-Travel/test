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
        console.log(response.data);
        this.setState({packages: response.data}, () => {console.log(this.state)})
      })
    }

    render() {

        const myPackages = this.state.packages.map(item => {
          return (
            <div className="packageDiv" key={item.id}>
              <li >
                {item.hotel_name}
              </li>
            </div>
          )
        })

      return (
          <ul>{myPackages}</ul>
      )
    }
}
