import data from '../data/LibraryList.json';

export default dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIBRARIES':
      return [...state, ...action.payload];

    default:
      return state;
  }
};