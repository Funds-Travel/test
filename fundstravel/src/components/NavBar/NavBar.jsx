import React, { Component } from 'react';
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase';


import './NavBar.css';


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    }
  }
  signOut() {
firebaseApp.auth().signOut();
}
componentWillMount() {
  let theUser;
    for (let key in localStorage) {
      if (key.includes("firebase:authUser")) {
        theUser = JSON.parse(localStorage.getItem(key)).email
      }
    }
    this.setState({email: theUser})
}
  render() {
    return (
      <div className="navBar">
        <h2>This is my NavBar, there are many like it but this one is mine</h2>
        <h3> {this.state.email}</h3>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign out
      </button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(NavBar)
