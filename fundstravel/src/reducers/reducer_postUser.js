import { POST_USER } from '../actions/index';

const initial = { postingUser: false, error: null, user: null };

export default function(state = initial, action) {
  switch (action.type) {
    case POST_USER + '_PENDING':
      return {...state, postingUser: true}
    case POST_USER + '_FULFILLED':
      return {...state, postingUser: false, user: action.payload.data}
    case POST_USER + '_REJECTED':
      return {...state, postingUser: false, error: action.payload}
    default:
      return state
  }
}
