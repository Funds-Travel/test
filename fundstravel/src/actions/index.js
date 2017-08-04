import axios from 'axios';

export const GET_PACKAGES = 'packages/GET_PACKAGES';
export const POST_USER = 'POST_USER';
export const SIGNED_IN = 'SIGNED_IN';
export const ADD_FUNDS = 'ADD_FUNDS';
export const GET_USER = 'GET_USER';

export function getPackages(funds){
  const request = axios.get('/api/packages/' + funds)
  return {
    type: GET_PACKAGES,
    payload: request
  }
}
export function postUser(user) {
  const request = axios.post('/api/traveler', user)
  return {
    type: POST_USER,
    payload: request
  }
}
export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    payload: email
  }
  return action
}
export function addFunds(user) {
  const request = axios.post('/api/addFunds/' + user[0], user)
  return {
    type: ADD_FUNDS,
    payload: request
  }
}

export function getUser(user){
  const request = axios.get('/api/user/' + user)
  return {
    type: GET_USER,
    payload: request
  }
}
