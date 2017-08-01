import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { firebaseApp } from '../../firebase';

import './Splash.css';


class Splash extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    //needs to be exported to store.../run through firebase
    //see inputs & button below
//     this.changeUserName = this.changeUserName.bind(this)
//     this.changePassword = this.changePassword.bind(this)
//     this.handleClick = this.handleClick.bind(this)
}
//     //needs to be exported to store.../run through firebase
//     //see input below
// changeUserName(e) {
//   this.setState({email: e.target.value})
// }
//     //needs to be exported to store.../run through firebase
//     // see input below
// changePassword(e) {
//     this.setState({password: e.target.value})
// }
//     //needs to be exported to store.../run through firebase
//     // see button below
// handleClick() {
//   axios.post('/welcome', {
//     email: this.state.email,
//     password: this.state.password
//   })
//   .then(response => {
//     console.log(response)
//     if (response.data.email) {
//       this.props.history.push('/home');
//     }
//   })
//   .catch(function(error) {
//     console.log(error)
//   })
// }


signIn() {
    console.log('signIn()---this.state', this.state.email)
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }
// the buttons and inputs need to be fixed to run
// through firebase/store
  render() {
    return (
      <div className="background">

       <section className="view1">

       <div className="login">


          <input value={this.state.email}
                onChange={event => this.setState({email: event.target.value})}
                className="" placeholder="Username"></input>
                <input value={this.state.password}
                      onChange={event => this.setState({password: event.target.value})}
                      className="" placeholder="Password"></input>
                <button onClick={() => this.signIn()}
                      className="loginButton">Login</button>
        </div>

       <div className="logo">
         <br />
            <h1> Trip Funds </h1>
          <br />


           <h2> Some savy text here? </h2>
         </div>
</section>

<section>

<div className="view2">

<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum lacus sit amet enim pulvinar lacinia. Etiam facilisis neque vehicula, elementum tellus rhoncus, sollicitudin mi. Donec facilisis urna vitae justo tempor, ut euismod enim sodales. Nunc vel ullamcorper orci, eget lobortis lectus. Suspendisse potenti. Integer blandit nisl eget nunc congue interdum. Aliquam imperdiet magna non justo ultrices, sit amet bibendum dui aliquam. Donec non eleifend orci. Nunc finibus risus pulvinar orci tristique, ac volutpat est cursus.

Phasellus nisi nisl, tempor feugiat urna a, iaculis placerat turpis. Ut maximus euismod fermentum. Nam at felis maximus, cursus mauris quis, eleifend libero. Nam euismod, tellus vitae interdum consectetur, velit odio porttitor leo, ut sagittis nunc elit sed urna. Mauris suscipit, augue porta venenatis egestas, purus diam sagittis arcu, ac vestibulum ex augue et sapien. Nunc ac mauris ut tellus porttitor molestie id in est. Curabitur euismod facilisis leo id porta. Sed ac magna congue, lobortis purus ut, pretium eros. Sed congue, sem eget rhoncus luctus, quam arcu imperdiet massa, id bibendum orci odio sit amet orci.

</h5>

</div>
</section>

<section>

<div className="view3">
<h1>Lorem ipsum dolor sit amet, adipiscing elit.</h1>

</div>
</section>

     </div>

   )
  }
}

function mapStateToProps(state) {
  // console.log('Splash state', state);
  return {}
}

export default connect(mapStateToProps, null)(Splash)
