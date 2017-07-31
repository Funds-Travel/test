import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory} from 'react-router';
import store from './store/index'

import { logUser } from './actions';
import { firebaseApp } from './firebase';

import App from './components/App';


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email))
    browserHistory.push('/welcome');
  } else {
    // console.log('user has signed out or still needs to sign in.');
    browserHistory.replace('/join');
  }
})


ReactDOM.render(
<App />
  , document.getElementById('root')
);
