import firebase from 'firebase';

// const auth = firebase.auth;
// const currentUser = firebase.auth().currentUser;
// const db = firebase.database;

export const signInUser = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => ({ user })).catch(error => ({ error }));

export const signUpUser = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => ({ user })).catch(error => ({ error }));

export const saveEmployee = (ref, payload) => {
  ref.push(payload);
};

export const getUserId = () => firebase.auth().currentUser.uid;

export const getEmployeeRef = () => {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`/users/${userId}/employees`);
};

export const getEmployees = ref => ref.once('value').then(snapshot => snapshot.val());

export const loadEmployeesListener = (ref, action) => {
  ref.on('value', (snapshot) => {
    action(snapshot.val());
  });
};
