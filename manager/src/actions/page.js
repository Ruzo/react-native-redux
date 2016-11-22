/* eslint-disable import/prefer-default-export */

import types from './types';

export const scheduleChanged = (id, day) =>
  ({ type: types.PAGE_SCHEDULE_CHANGED, payload: { id, day } });

export const employeeSave = payload =>
  ({ type: types.EMPLOYEE_SAVE, payload });
