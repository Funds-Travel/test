import React, { Component } from 'react';
import { connect } from 'react-redux';

// import axios from 'axios';

import { firebaseApp } from '../../firebase';

import Join from "../Join/Join";
import './Splash.css';


class Splash extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
}

signIn() {
    console.log('singIn()---this.state', this.state.email)
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }
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

            <a href="#signUp">Or create an account</a>

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
<a name="signUp">
<Join /></a>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Splash)
