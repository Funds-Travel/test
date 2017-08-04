import { combineReducers } from 'redux';
import PostUserReducer from './reducer_postUser';
import GetPackages from './reducer_getPackages';
import AddFundsReducer from './reducer_addFunds';
import GetUser from './reducer_getUser';



const rootReducer = combineReducers({
  postUser: PostUserReducer,
  packet: GetPackages,
  addFunds: AddFundsReducer,
  user: GetUser
});

export default rootReducer;
