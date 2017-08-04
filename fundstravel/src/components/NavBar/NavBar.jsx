import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row, Input } from 'react-materialize';
import Packages from '../../containers/Packages/Packages';

// import { getUser } from '../../actions/index';

// import firebase from 'firebase';
import { firebaseApp } from '../../firebase';
// import axios from 'axios';

import { getPackages, addFunds, getUser } from '../../actions/index';
// import { addFunds } from '../../actions/index';

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
  let theUser = [email, newBalance, newGoal, goal, balance];
  this.props.addFunds(theUser)
  // axios.post('/api/addFunds/' + email, {email, newBalance, newGoal, goal, balance })
  // axios.get('/api/user/' + email)
  //   .then(response => {
  //     this.setState({
  //       balance: response.data[0].balance,
  //       goal: response.data[0].goal
  //     })
  //   })

  }


  componentWillMount() {
    const user = this.props.user.data[0];
    this.setState({balance: user.balance, goal: user.goal, email: user.user_email})

    // let ourUser = firebase.auth().currentUser.email;
    // this.props.getUser(ourUser)
    // let theUser;
    // if (ourUser != null) {
    //    theUser = firebase.auth().currentUser.email;
    // } else {
    //   for (let key in localStorage) {
    //     if (key.includes("firebase:authUser")) {
    //       theUser = JSON.parse(localStorage.getItem(key)).email
    //
    //     }
    //   }
    // }
    //   this.setState({email: theUser})
    //   axios.get('/api/user/' + theUser)
    //   .then(response => {
    //     this.setState({
    //       balance: response.data[0].balance,
    //       goal: response.data[0].goal
    //     })
    //   })
    //   .catch((error) => {
    //     console.log('error' + error)
    //   })
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
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo center">Travel Funds</a>
            </div>
          </nav>
        </div>

        <div className="container">

        </div>



        <div className="row">
          <div className="col s12 m12 l3">

            <div className="card-panel red lighten-3">
              <span className="white-text"><h4>Welcome</h4></span>
              <span className="white-text"><h5> {this.state.email}</h5></span>
              <div className="signout_btn">
                <button className=" btn-large waves-effect waves-light red"
                        onClick={() => this.signOut()} >Sign out</button>
              </div>

            </div>


              <div className="card-panel red lighten-3">
                <span className="white-text">
                  <h4>Balance: {this.state.balance}</h4>
                  <h4>Goal: {this.state.goal}</h4>
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

          <div className=" eachPackageDiv col s12 m12 l9">
            <Packages />

          </div>

        </div>

      </div>


    )
  }
}


function mapStateToProps({user}) {
  return {
  user: user.user}
}

const mapDispatchToProps = {
  getPackages,
  addFunds,
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
