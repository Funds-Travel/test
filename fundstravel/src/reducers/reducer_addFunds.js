import { ADD_FUNDS } from '../actions/index.js';

const initial = { funds: [], postingFunds: false, error: null };

export default function(state = initial, action) {
  switch (action.type) {
    case ADD_FUNDS + '_PENDING':
      return {...state, postingFunds: true, error: null }
    case ADD_FUNDS + '_FULFILLED':
      return {...state, postingFunds: false, funds: action.payload }
    case ADD_FUNDS + '_REJECTED':
      return {...state, postingFunds: false, error: action.payload}
    default:
      return state
  }
}
