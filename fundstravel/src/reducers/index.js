import {GET_PACKAGES} from '../actions/index.js'

const initial = { packages: [], fetchingPackages: false, error: null };

export default function rootReducer(state = initial, action) {
  switch (action.type) {
    case GET_PACKAGES + '_PENDING':
      return {...state, fetchingPackages: true}
    case GET_PACKAGES + '_FULFILLED':
      return { ...state, fetchingPackages: false, packages: action.payload.data }
    case GET_PACKAGES + '_REJECTED':
      return { ...state, fetchingPackages: false, error: action.payload }
    default:
      return state
  }
}
