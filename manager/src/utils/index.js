/* eslint-disable import/prefer-default-export, no-restricted-syntax */

export const employeesToArray = (list) => {
  const newList = Object.entries(list).map(employee => ({ id: employee[0], ...employee[1] }));
  return newList;
};
