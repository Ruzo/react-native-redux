import firebase from 'firebase';

export const signInUser = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => ({user})).catch(error => ({error}));
export const signUpUser = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => ({user})).catch(error => ({error}));