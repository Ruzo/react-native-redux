import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import selectedReducer from './selectedReducer';

export default combineReducers({
  libraries: dataReducer,
  selected: selectedReducer
});