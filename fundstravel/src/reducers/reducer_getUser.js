import { GET_USER } from '../actions/index.js';

const initial = { user: {}, gettingUser: false, error: null }

export default function(state = initial, action) {
  switch (action.type) {
    case GET_USER + '_PENDING':
      return {...state, gettingUser: true, error: null }
    case GET_USER + '_FULFILLED':
      return {...state, gettingUser: false, user: action.payload }
    case GET_USER + '_REJECTED':
      return {...state, gettingUser: false, error: action.payload }
    default:
      return state
  }
}
