import data from '../data/LibraryList.json';

export const getLibraries = () => {
  return {type: 'GET_LIBRARIES', payload: data}
};

export const selectLibrary = (id) => {
  return {type: 'SELECT_LIBRARY', payload: id}
};