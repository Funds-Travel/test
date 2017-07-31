import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Splash.css'



class Splash extends Component {
constructor() {
  super()
  this.state = {
    password: '',
    email: ''
  }
  this.changeUserName = this.changeUserName.bind(this)
  this.changePassword = this.changePassword.bind(this)
  this.handleClick = this.handleClick.bind(this)
}
changeUserName(e) {
  this.setState({email: e.target.value})
}
changePassword(e) {
  this.setState({password: e.target.value})
}
handleClick() {
  axios.post('/welcome', {
    email: this.state.email,
    password: this.state.password
  })
  .then(response => {
    console.log(response)
    if (response.data.email) {
      this.props.history.push('/home');
    }
  })
  .catch(function(error) {
    console.log(error)
  })
}


  render() {
    return (
      <div className="background">

<section className="view1">


        <div className="login">
          <button onClick={this.handleClick}
                className="loginButton">Login</button>
          <input value={this.state.password}
                onChange={this.changePassword}
                className="" placeholder="Password"></input>
          <input value={this.state.email}
                onChange={this.changeUserName}
                className="" placeholder="Username"></input>
        </div>




          <div className="logo">
            <h1> Trip Funds </h1>
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
<h1>Automatically populate the trips you can afford!!</h1>

</div>
</section>



      </div>


    )
  }
}


export default withRouter(Splash)
