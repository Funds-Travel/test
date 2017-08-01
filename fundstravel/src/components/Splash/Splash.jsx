import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row, Input } from 'react-materialize';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { postUser } from '../../actions/index';

// import axios from 'axios';

import { firebaseApp } from '../../firebase';

// import Join from "../Join/Join";
import './Splash.css';
import '../Join/Join.css';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.signUp = this.signUp.bind(this);

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
  this.signUp(this.props)

}
signUp() {
  console.log('singUp()---this.state', this.state)
  const { email, password } = this.state;
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
}


componentWillReceiveProps(nextProps) {
  console.log(nextProps);
  if (nextProps.user) {
    this.props.history.push('/welcome');
  } else if (nextProps.error) {
    alert('Error. Please try again');
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

                <Modal
              	header='Create Account'
              	trigger={
              		<Button waves='light'>Create an account</Button>
              	}>

                <Row>

  <Input placeholder="Placeholder" s={6} label="First Name" />
  <Input s={6} label="Last Name" />
  <Input type="password" label="password" s={12}
          value={this.state.password}
          onChange={this.handlePassword}/>
  <Input type="password" label="confirm password" s={12}
          value={this.state.confirm}
          onChange={this.handleConfirm}/>
  <Input type="email" label="Email" s={12}
          value={this.state.email}
          onChange={this.handleEmail}/>
          <button
            className="submitButton"
            onClick={event => this.handleClick(event)}
          >
            {' '}Submit{' '}
          </button>
</Row>


              </Modal>

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

function mapStateToProps({ user }) {
  return user;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
