/* eslint-disable import/prefer-default-export */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyle} from './styles';

export const Button = ({children, handler, compStyle, disable}) => {
  return (
    <TouchableOpacity onPress={handler} disabled={disable} style={[ButtonStyle.logButton, compStyle]}>
      {children}
    </TouchableOpacity>
  );
};