/* eslint-disable import/prefer-default-export, no-restricted-syntax */
import { daysOfWork } from '../settings';

export const selectableDays = (days) => {
  const list = {};
  days.forEach((day) => {
    list[day] = false;
  });
  return list;
};

export const objectsToArray = (list, key) => {
  const newList = Object.entries(list).map((item) => {
    const value = (typeof item[1] === 'object') ? { ...item[1] } : item[1];
    return ({ [key]: item[0], value });
  });
  return newList;
};

export const sortByDays = (a, b) => {
  if (daysOfWork.indexOf(a.day) < daysOfWork.indexOf(b.day)) return -1;
  if (daysOfWork.indexOf(a.day) > daysOfWork.indexOf(b.day)) return 1;
  return 0;
};
