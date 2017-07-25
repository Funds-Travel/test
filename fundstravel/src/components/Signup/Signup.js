import React from 'react';
import ReactDom from 'react-dom'
import './Signup.css'

export default class SignIn extends React.Component {
  render(){
    return(
      <div className="signup-container">
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input></input>
      </div>
    );
  }
}
