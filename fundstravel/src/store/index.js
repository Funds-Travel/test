import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import reducers from '../reducers/index';

const store = createStore(reducers, applyMiddleware(promise()))


export default store
