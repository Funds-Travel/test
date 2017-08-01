import { combineReducers } from 'redux';
import PostUserReducer from './reducer_postUser';
import GetPackages from './reducer_getPackages';
// import GetFunds from './reducer_getFunds';


const rootReducer = combineReducers({
  postUser: PostUserReducer,
  packet: GetPackages,
  // funds: GetFunds

});

export default rootReducer;
