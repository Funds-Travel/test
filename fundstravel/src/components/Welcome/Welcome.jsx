import React, { Component } from 'react';
import { firebaseApp } from '../../firebase';
import { getUser } from '../../actions/index';
import { connect } from 'react-redux';


import './Welcome.css';

class Welcome extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="card-panel red lighten-3">
        <span className="white-text"><h4>Welcome</h4></span>
        <span className="white-text"><h5>{this.props.user.user.data[0].user_email} </h5></span>
        <div className="signout_btn">
          <button className=" btn-large waves-effect waves-light red"
                  onClick={() => this.signOut()} >Sign out</button>
        </div>
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
  getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
