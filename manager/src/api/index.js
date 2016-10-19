import firebase from 'firebase';

export const signInUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password).then(user => ({user})).catch(error => ({error}));