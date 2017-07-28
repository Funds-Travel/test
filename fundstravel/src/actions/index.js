import axios from 'axios';

// actions
export const GET_PACKAGES = 'packages/GET_PACKAGES'

// action creators
// action with promise
export function getPackages(){
  const request = axios.get('/api/packages')
  return {
    type: GET_PACKAGES,
    payload: request
  }
}

// Example simple action
// export function addPackage(packet) {
//   console.log("Adding")
//
//   return {
//     type: ADD_PACKAGE,
//     payload: packet
//   }
// }
