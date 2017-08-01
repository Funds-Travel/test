import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

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
    console.log('singIn()---this.state', this.state.email)
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


          <input value={this.state.password}
                onChange={event => this.setState({password: event.target.value})}
                className="" placeholder="Password"></input>
          <input value={this.state.email}
                onChange={event => this.setState({email: event.target.value})}
                className="" placeholder="Username"></input>


       <button onClick={() => this.signIn()}
                className="loginButton">Login</button>
        </div>




        <div className="">
            <h1 className="logo"> Trip Funds </h1>
          </div>

            <h2> Some savy text here? </h2>

</section>

<section>

<div className="view2">
<h1>See the trips you can take with the savings you have!!</h1>

</div>
</section>

<section>

<div className="view3">
<h1>Automatically see the trips you can afford!!</h1>

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
