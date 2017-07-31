import React, { Component } from 'react';
import { connect } from 'react-redux';


import './Join.css';

export default class Join extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirm: ''
    }
    //this needs to be in the store...
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleConfirm = this.handleConfirm.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    //this needs to be in the store...
    handleEmail(event) {
    this.setState({ email: event.target.value })
  }
//this needs to be in the store...
  handlePassword(event) {
    this.setState({ password: event.target.value })
  }
//this needs to be in the store...
  handleConfirm(event) {
    this.setState({ confirm: event.target.value })
  }
//this needs to be in the store...
  handleClick(event){
    event.preventDefault();
    // Something needs to happen with the input
    this.props.postUser(this.state)
  }
//this needs to be in the store...
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.user) {
      this.props.history.push('/home')
    } else if (nextProps.error) {
      alert("Error. Please try again")
    }
  }
  render() {
    return (
      <div className="borderDiv">
          <div className="input">
            <div className="header"> Create Account </div>

              <div className="email">  Email </div>
                <input className="inputStyle"
                       placeholder ="Enter Email"
                       value={this.state.email}
                       onChange={this.handleEmail} />

              <div className="password"> Password </div>
                <input className="inputStyle"
                       placeholder ="Enter Password"
                       value={this.state.password}
                       onChange={this.handlePassword} />

              <div className="confirm"> Confirm </div>
                <input className="inputStyle"
                       placeholder ="Confirm Password"
                       value={this.state.confirm}
                       onChange={this.handleConfirm} />

              <button className="submitButton" onClick={ (event) => this.handleClick(event) }> Submit </button>
          </div>
      </div>
    )
  }
}
