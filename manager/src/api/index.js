import firebase from 'firebase';

export const signInUser = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => ({ user })).catch(error => ({ error }));

export const signUpUser = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => ({ user })).catch(error => ({ error }));

export const saveEmployee = (ref, payload) => {
  ref.push(payload);
};

export const updateEmployee = (ref, payload) => {
  ref.update(payload);
};

export const deleteEmployee = ref => ref.remove();

export const getUserId = () => firebase.auth().currentUser.uid;

export const getEmployeesRef = () => {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`/users/${userId}/employees`);
};

export const getSelectedEmployeeRef = (id) => {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`/users/${userId}/employees/${id}`);
};

export const getEmployees = ref => ref.once('value').then(snapshot => snapshot.val());

export const loadEmployeesListener = (ref, action) => {
  ref.on('value', (snapshot) => {
    action(snapshot.val());
  });
};
