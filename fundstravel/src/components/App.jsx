import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/index';

import Join from './Join/Join';
import Splash from './Splash/Splash';
import Home from './Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <Router history={browserHistory}>
           <Route exact path="/welcome" component={Home} />
           <Route exact path="/splash" component={Splash} />
           <Route exact path="/join" component={Join} />
        </Router>
      </Provider>
      </div>
    )
  }
}

export default App;
