import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row, Input } from 'react-materialize';
import { postUser, getUser } from '../../actions/index';
import { firebaseApp } from '../../firebase';
import './Splash.css';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
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
  this.props.postUser(this.state);
  this.signUp(this.props)
}
signUp() {
  const { email, password } = this.state;
  this.props.getUser(email)
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
}
signIn() {
    const { email, password } = this.state;
    this.props.getUser(email)
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
                className="form-control" placeholder="Username"></input>
                <br />
                <input className="form-control" value={this.state.password}
                  type="password"
                  onChange={event => this.setState({password: event.target.value})}
                   placeholder="Password"></input>
                   <br />
                  <button onClick={() => this.signIn()}
                          className="waves-effect waves-light btn">-Login-</button>
                <br />
                <br />
                <Modal className="modal1 center-align" header='Create Account'
                         trigger={
                      <Button className='waves-effect waves-light btn'>-Join!-</Button>
                                 }>
                  <Row>
                    <Input s={6} placeholder="First Name" />
                    <Input s={6} placeholder="Last Name"  />
                    <Input type="password" placeholder="Password"s={12}
                            value={this.state.password}
                            onChange={this.handlePassword}/>
                    <Input type="password" placeholder="Confirm Password"  s={12}
                            value={this.state.confirm}
                            onChange={this.handleConfirm}/>
                    <Input type="email" placeholder="Email" s={12}
                            value={this.state.email}
                            onChange={this.handleEmail}/>
                    <button className="modal"
                            onClick={event => this.handleClick(event)}>
                            {' '}Submit{' '}
                    </button>
                  </Row>
                </Modal>
        </div>
       <div className="logo">
         <br />
            <h1 className="logoText"> Trip Funds </h1>
         </div>
         <button className="nextButton" onClick={this.scrollToView2}></button>
       </section>
       <section>
         <div className="view2">
           <h3 className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum lacus sit amet enim pulvinar lacinia. Etiam facilisis neque vehicula, elementum tellus rhoncus, sollicitudin mi. Donec facilisis urna vitae justo tempor, ut euismod enim sodales. Nunc vel ullamcorper orci, eget lobortis lectus. Suspendisse potenti. Integer blandit nisl eget nunc congue interdum. Aliquam imperdiet magna non justo ultrices, sit amet bibendum dui aliquam. Donec non eleifend orci. Nunc finibus risus pulvinar orci tristique, ac volutpat est cursus.

             Phasellus nisi nisl, tempor feugiat urna a, iaculis placerat turpis. Ut maximus euismod fermentum. Nam at felis maximus, cursus mauris quis, eleifend libero. Nam euismod, tellus vitae interdum consectetur, velit odio porttitor leo, ut sagittis nunc elit sed urna. Mauris suscipit, augue porta venenatis egestas, purus diam sagittis arcu, ac vestibulum ex augue et sapien. Nunc ac mauris ut tellus porttitor molestie id in est. Curabitur euismod facilisis leo id porta. Sed ac magna congue, lobortis purus ut, pretium eros. Sed congue, sem eget rhoncus luctus, quam arcu imperdiet massa, id bibendum orci odio sit amet orci.
           </h3>
            <div>
              <br />
              <br />
              <button onClick={this.scrollToView3}>Next</button>
            </div>
          </div>
        </section>
        <section>
          <div className="view3">
            <h1>The world is waiting for you...</h1>
          </div>
        </section>
     </div>
   )
  }
}

function mapStateToProps({user}) {
  return {
  user: user
  }
}

const mapDispatchToProps = {
  getUser,
  postUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
