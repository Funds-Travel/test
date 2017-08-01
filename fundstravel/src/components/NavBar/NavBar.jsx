import React, { Component } from 'react';
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase';
import firebase from 'firebase';

import './NavBar.css';


class NavBar extends Component {
  signOut() {
firebaseApp.auth().signOut();
}
  render() {
    let theUser;
    const userObj = firebase.auth().currentUser;
if (userObj != null) {
  userObj.providerData.forEach(function (profile) {
    console.log("Email: "+profile.email)
    theUser = profile.email
  })
}

    console.log(theUser)
    return (
      <div className="navBar">
        <h2>This is my NavBar, there are many like it but this one is mine</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h5> {theUser}</h5>
        <br />

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
