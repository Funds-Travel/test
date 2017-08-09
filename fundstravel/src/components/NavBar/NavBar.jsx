import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPackages, addFunds, getUser } from '../../actions/index';
import Packages from '../../containers/Packages/Packages';
import { Button, Modal, Row, Input } from 'react-materialize';
import { firebaseApp } from '../../firebase';
import axios from 'axios';
import './NavBar.css';

class NavBar extends Component {
  // componentWillMount() {
  //   this.props.getUser()
  //   this.props.getPackages()
  // }
  constructor(props) {
    super(props);
    this.state = {
      // email: this.props.user.user.data[0].user_email,
      // balance: this.props.user.user.data[0].balance,
      // goal: this.props.user.user.data[0].goal,
      email: '',
      balance: '',
      goal: '',
      newBalance: '',
      newGoal: ''
  }
    this.addFunds = this.addFunds.bind(this);
  }
  addFunds(event) {
    const { email, newBalance, newGoal, goal, balance } = this.state;
    let theUser = [email, newBalance, newGoal, goal, balance];
    this.props.addFunds(theUser)
    .then(response => {
      this.props.getUser(theUser[0])
      .then(response => {
        this.setState({balance: response.value.data[0].balance,
                        goal: response.value.data[0].goal})
      })
    })
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
      <div className="container-fluid nav-container">
        <div className="nav-side-menu col-sm-2 col-md-3">
            <a href="#!" className="brand brandTitle">Trip Funds</a>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

        <div className="menu-list">
            <div className="navWelcome">
                  <span className="gray-text"><h2>Welcome</h2></span>
                  <span className="gray-text"><h4> {this.state.email}</h4></span>
                  <div className="signout_btn">
                    <button className="btn btn-primary red-background "
                            onClick={() => this.signOut()} >Sign out</button>
            </div>

   </div>
 </div>
<br />
              <div className="navFunds">
                <span className="gray-text">
                  <h3>Balance: ${this.state.balance}</h3>
                  <h3>Goal: ${this.state.goal}</h3>
                  <br />
                  <Modal header='Add Funds' trigger={
                    <Button className=" ">Add Funds</Button>
                  }>
                  <br />
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
        <div className="col-sm-offset-4 col-sm-8 col-md-9 col-md-offset-3 container ">
  <Packages />

        </div>

      </div>
)
  }
}
function mapStateToProps({user, packet}) {
  return {
  user: user.user,
  packet: packet.packages
  }
}
const mapDispatchToProps = {
  getPackages,
  addFunds,
  getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
