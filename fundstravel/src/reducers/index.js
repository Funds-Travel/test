import { combineReducers } from 'redux';
import PostUserReducer from './reducer_postUser';
import GetPackages from './reducer_getPackages';

const rootReducer = combineReducers({
  user: PostUserReducer,
  packet: GetPackages
});

export default rootReducer;
