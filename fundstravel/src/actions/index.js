import axios from 'axios';

// actions
export const GET_PACKAGES = 'packages/GET_PACKAGES';
export const POST_USER = 'POST_USER';

// action creators
// action with promise
export function getPackages(){
  const request = axios.get('/api/packages')
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
