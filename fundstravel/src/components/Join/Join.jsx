import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { postUser } from '../../actions/index';


import './Join.css';

class Join extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirm: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleConfirm(event) {
    this.setState({ confirm: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    // Something needs to happen with the input
    this.props.postUser(this.state);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.user) {
      this.props.history.push('/welcome');
    } else if (nextProps.error) {
      alert('Error. Please try again');
    }
  }

  render() {
    return (
      <div className="borderDiv">
        <div className="input">
          <div className="header"> Create Account </div>

          <div className="email"> Email </div>
          <input
            className="inputStyle"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleEmail}
          />

          <div className="password"> Password </div>
          <input
            className="inputStyle"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handlePassword}
          />

          <div className="confirm"> Confirm </div>
          <input
            className="inputStyle"
            placeholder="Confirm Password"
            value={this.state.confirm}
            onChange={this.handleConfirm}
          />

          <button
            className="submitButton"
            onClick={event => this.handleClick(event)}
          >
            {' '}Submit{' '}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return user;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postUser }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Join));
