import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyle} from './styles';

export const Button = ({children, handler, compStyle}) => {
  return (
    <TouchableOpacity onPress={handler} style={[ButtonStyle.logButton, compStyle]}>
      {children}
    </TouchableOpacity>
  );
};