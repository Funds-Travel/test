// import axios from 'axios';
// import firebase from 'firebase';
// import { Button, Modal, Row, Input } from 'react-materialize';
// import { firebaseApp } from '../../firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Packages from '../../containers/Packages/Packages';
import { getPackages, addFunds, getUser } from '../../actions/index';
import './NavBar.css';
import TopNav from '../TopNav/TopNav';
import Welcome from '../Welcome/Welcome';
import Funds from '../Funds/Funds';

// import OurFilter from '../OurFilter/OurFilter';

class NavBar extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   email: this.props.user.data[0].user_email,
    //   balance: this.props.user.data[0].balance,
    //   goal: this.props.user.data[0].goal,
    //   newBalance: '',
    //   newGoal: ''
    // }
    // this.addFunds = this.addFunds.bind(this);
    // this.handleNewGoal = this.handleNewGoal.bind(this);
  // }
// signOut() {
//   firebaseApp.auth().signOut();
// }
// handleNewBalance(event) {
//   this.setState({ newBalance: event.target.value });
// }
// handleNewGoal(event) {
//     this.setState({ newGoal: event.target.value });
// }
// addFunds(event) {
//   const { email, newBalance, newGoal, goal, balance } = this.state;
//   let theUser = [email, newBalance, newGoal, goal, balance];
//   this.props.addFunds(theUser)
  // axios.post('/api/addFunds/' + email, {email, newBalance, newGoal, goal, balance })
  // axios.get('/api/user/' + email)
  //   .then(response => {
  //     this.setState({
  //       balance: response.data[0].balance,
  //       goal: response.data[0].goal
  //     })
  //   })
  // }
  // componentWillMount() {
  //   // const user = this.props.user.data[0];
  //   // this.setState({balance: user.balance, goal: user.goal, email: user.user_email})
  //   // let ourUser = firebase.auth().currentUser.email;
  //   // this.props.getUser(ourUser)
  //   // let theUser;
  //   // if (ourUser != null) {
  //   //    theUser = firebase.auth().currentUser.email;
  //   // } else {
  //   //   for (let key in localStorage) {
  //   //     if (key.includes("firebase:authUser")) {
  //   //       theUser = JSON.parse(localStorage.getItem(key)).email
  //   //
  //   //     }
  //   //   }
  //   // }
  //   //   this.setState({email: theUser})
  //   //   axios.get('/api/user/' + theUser)
  //   //   .then(response => {
  //   //     this.setState({
  //   //       balance: response.data[0].balance,
  //   //       goal: response.data[0].goal
  //   //     })
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log('error' + error)
  //   //   })
  // }
// THIS DOESN'T WORK AND I WISH IT DID!!!!!!!
// componentWillUpdate(nextProps, nextState) {
//   if(this.props.balance !== this.state.newBalance) {
//     return nextState
//   }
// }
  render() {
    return (
      <div>
        <TopNav />
        <div className="container">
        </div>
        <div className="row">
          <div className="col s12 m12 l3">
            <Welcome />
              <Funds />
          </div>
          <div className=" eachPackageDiv col s12 m12 l9">
            <Packages />
          </div>
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
