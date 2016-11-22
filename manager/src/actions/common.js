/* eslint-disable import/prefer-default-export */

import types from './types';

export const textChanged = (reducerKey, field, text) => {
  const actionType = `${reducerKey}_TEXT_CHANGED`;
  return { type: types[actionType], payload: { field, text } };
};
