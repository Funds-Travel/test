import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row, Input } from 'react-materialize';
import Packages from '../../containers/Packages/Packages';

// import { getUser } from '../../actions/index';

import firebase from 'firebase';
import { firebaseApp } from '../../firebase';
import axios from 'axios';

import './NavBar.css';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      balance: '',
      goal: '',
      newBalance: '',
      newGoal: ''
    }
    this.addFunds = this.addFunds.bind(this);
    this.handleNewGoal = this.handleNewGoal.bind(this);
  }
signOut() {
  firebaseApp.auth().signOut();
}

handleNewBalance(event) {
  this.setState({ newBalance: event.target.value });
}
handleNewGoal(event) {
    this.setState({ newGoal: event.target.value });
}

addFunds(event) {
  const { email, newBalance, newGoal, goal, balance } = this.state;
  axios.post('/api/addFunds/' + email, {email, newBalance, newGoal, goal, balance })
  axios.get('/api/user/' + email)
    .then(response => {
      this.setState({
        balance: response.data[0].balance,
        goal: response.data[0].goal
      })
    })
  }


  componentWillMount() {
    let ourUser = firebase.auth().currentUser;
    let theUser;
    if (ourUser != null) {
       theUser = firebase.auth().currentUser.email;
    } else {
      for (let key in localStorage) {
        if (key.includes("firebase:authUser")) {
          theUser = JSON.parse(localStorage.getItem(key)).email

        }
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

componentDidMount() {
  Modal.defaultProps = {
    actions: [<Button
    modal="close"
    className="submitButton"
    onClick={event => this.addFunds(event)}
    >
    {' '}Submit{' '}
  </Button>]
  }
}


  render() {
    return (
      <div className="">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper   blue lighten-3">
              <a href="#!" className="brand-logo center   blue lighten-3">Travel Funds</a>
            </div>
          </nav>
        </div>

        <div className="container">

        </div>



        <div className="row ">
          <div className="col s12 m12 l3 navFix show-on-medium-and-up">

            <div className="card-panel small fixed  blue-grey lighten-4">
              <span className="gray-text"><h4>Welcome</h4></span>
              <span className="gray-text"><h5> {this.state.email}</h5></span>
              <div className="signout_btn">
                <button className="waves-effect waves-light btn red lighten-1"
                        onClick={() => this.signOut()} >Sign out</button>
              </div>

            </div>


              <div className="card-panel  blue-grey lighten-4">
                <span className="gray-text">
                  <h4>Balance: ${this.state.balance}</h4>
                  <h4>Goal: ${this.state.goal}</h4>
                  <br />
                  <Modal header='Add Funds' trigger={
                    <Button waves='light'>Add Funds</Button>
                  }>
                    <Row>
                      <Input type="s" label="Add Funds" s={12}
                      value={this.state.newBalance}
                      onChange={event => this.setState({newBalance: event.target.value})}/>
                      <Input type="s" label="Set New Goal" s={12}

                      placeholder={this.state.goal}
                      onChange={this.handleNewGoal}/>
                    </Row>
                  </Modal>
                </span>
              </div>


          </div>

          <div className=" eachPackageDiv col s12 m12 l9 right">
            <Packages />

          </div>

        </div>

      </div>


    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(NavBar)
