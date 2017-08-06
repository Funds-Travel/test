import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory} from 'react-router';
import store from './store/index';
import { logUser } from './actions';
import { firebaseApp } from './firebase';
import App from './components/App';


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email))
    browserHistory.push('/welcome');
  } else {
    browserHistory.replace('/splash');
  }
})


ReactDOM.render(
<App />
  , document.getElementById('root')
);
