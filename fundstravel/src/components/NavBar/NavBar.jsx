import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { getUser } from '../../actions/index';

import { firebaseApp } from '../../firebase';
import axios from 'axios';

import './NavBar.css';


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      balance: '',
      goal: ''
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
    axios.get('/api/user/' + theUser)
    .then(response => {
      this.setState({
        balance: response.data[0].balance,
        goal: response.data[0].goal
      })
    })
    .catch((error) => {
      console.log('error' + error)
    })
}
  render() {

    return (
      <div className="navBar">
        <h2>This is my NavBar, there are many like it but this one is mine</h2>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h6> {this.state.email}</h6>
        <h3>Balance: {this.state.balance}</h3>
        <h3>Goal: {this.state.goal}</h3>

        <button
          className=" btn-large waves-effect waves-light red"
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
