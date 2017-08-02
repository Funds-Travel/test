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
    this.scrollToView2 = this.scroll.bind(this, ".view2")
    this.scrollToView3 = this.scroll.bind(this, ".view3")

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

componentDidMount() {
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
    console.log('signIn()---this.state', this.state.email)
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }
  scroll(element) {
    var top = window.$(element).offset().top
    window.$('body').animate({
      scrollTop: top
    }, 1000)
  }

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
                <br />
                <Modal
              	header='Create Account'
              	trigger={
              		<Button className='joinButton'>Sign Up</Button>
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
            className=""
            onClick={event => this.handleClick(event)}
          >
            {' '}Submit{' '}
          </button>
</Row>


              </Modal>


        </div>

       <div className="logo">
         <br />
            <h1> Trip Funds </h1>
          <br />


           <h2> Some savy text here? </h2>
         </div>
         <button className="nextButton" onClick={this.scrollToView2}></button>
</section>

<section>

<div className="view2">

<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum lacus sit amet enim pulvinar lacinia. Etiam facilisis neque vehicula, elementum tellus rhoncus, sollicitudin mi. Donec facilisis urna vitae justo tempor, ut euismod enim sodales. Nunc vel ullamcorper orci, eget lobortis lectus. Suspendisse potenti. Integer blandit nisl eget nunc congue interdum. Aliquam imperdiet magna non justo ultrices, sit amet bibendum dui aliquam. Donec non eleifend orci. Nunc finibus risus pulvinar orci tristique, ac volutpat est cursus.

Phasellus nisi nisl, tempor feugiat urna a, iaculis placerat turpis. Ut maximus euismod fermentum. Nam at felis maximus, cursus mauris quis, eleifend libero. Nam euismod, tellus vitae interdum consectetur, velit odio porttitor leo, ut sagittis nunc elit sed urna. Mauris suscipit, augue porta venenatis egestas, purus diam sagittis arcu, ac vestibulum ex augue et sapien. Nunc ac mauris ut tellus porttitor molestie id in est. Curabitur euismod facilisis leo id porta. Sed ac magna congue, lobortis purus ut, pretium eros. Sed congue, sem eget rhoncus luctus, quam arcu imperdiet massa, id bibendum orci odio sit amet orci.

</h5>
<div>
  <button onClick={this.scrollToView3}>Next</button>
</div>
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

function mapStateToProps({ user }) {
  return user;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
