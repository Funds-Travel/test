import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQ6-r89KydXggVKZw3xlPF3Kz8vsMNEgU",
    authDomain: "goalcoach-f228c.firebaseapp.com",
    databaseURL: "https://goalcoach-f228c.firebaseio.com",
    projectId: "goalcoach-f228c",
    storageBucket: "goalcoach-f228c.appspot.com",
    messagingSenderId: "318836841058"
  };

  export const firebaseApp = firebase.initializeApp(config);
  // export const goalRef = firebase.database().ref('goals');
  // export const completeGoalRef = firebase.database().ref('completeGoals')
