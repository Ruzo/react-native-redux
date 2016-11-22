import { combineReducers } from 'redux';
import auth from './authReducer';
import page from './pageReducer';
import employees from './employeesReducer';
import server from './serverReducer';

export default combineReducers({
  auth,
  page,
  employees,
  server,
});
