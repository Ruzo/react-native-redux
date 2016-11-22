/* eslint-disable import/prefer-default-export */

import types from './types';

export const connectingToServer = () => ({ type: types.CONNECTING_TO_SERVER });

export const disconnectedFromServer = () => ({ type: types.DISCONNECTED_FROM_SERVER });
