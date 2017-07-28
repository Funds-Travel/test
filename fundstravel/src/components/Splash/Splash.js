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
      <div>

        <div className="login">
          <button onClick={this.handleClick}
                className="login">Login</button>
          <input value={this.state.password}
                onChange={this.changePassword}
                className="" placeholder="Password"></input>
          <input value={this.state.email}
                onChange={this.changeUserName}
                className="" placeholder="Username"></input>
        </div>



        <div className="about">

          <div className="logo">
            Splash Page
          </div>


        Lorem ipsum dolor sit amet, ne nusquam accumsan gloriatur pri. No eam libris bonorum oporteat. Vis fabulas lucilius maiestatis id, ea est case consequuntur. Vel paulo nonumy vidisse ut.

Vivendo probatus no nam, at per tale dissentiet definitionem. Cum alia persius no, ex cum odio quaeque definitiones. Id nulla mundi ancillae pro, et duo agam oratio erroribus. Vocibus contentiones concludaturque sea cu.

Aperiam recusabo postulant id qui, idque adipisci ea nec. Est ea dicit disputationi, no officiis vivendum qui. Ex iuvaret suscipiantur mediocritatem quo, te fabulas intellegam eam, no diceret urbanitas interpretaris his. Est cu malis soluta, ex pro postea viderer platonem, nullam scripta duo ad. Ad dico quidam minimum mei, ea usu purto imperdiet, cu delicata principes.

        </div>

            <div>
              <button className="joinButton"> Join Us </button>
            </div>


      </div>


    )
  }
}


export default withRouter(Splash)
