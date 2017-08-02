import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row, Input } from 'react-materialize';

// import { getUser } from '../../actions/index';

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
  const { email, newBalance, newGoal, goal } = this.state;
  axios.post('/api/addFunds/' + email, {email, newBalance, newGoal, goal})
  axios.get('/api/user/' + email)
    .then(response => {
      this.setState({
        balance: response.data[0].balance,
        goal: response.data[0].goal
      })
    })
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
      <div className="navBar">
        <h6>This is my NavBar, there are many like it but this one is mine</h6>


        <Modal
        header='Add Funds'
        trigger={
          <Button waves='light'>Add Funds</Button>
        }>

        <Row>


        <Input type="s" label="Add Funds" s={12}
        value={this.state.newBalance}
        onChange={event => this.setState({newBalance: event.target.value})}/>
        <Input type="s" label="Set New Goal" s={12}

        placeholder={this.state.goal}
        onChange={this.handleNewGoal}/>
        <p>










      </p>

        </Row>


        </Modal>


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
