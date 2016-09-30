import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export const Button = ({children, handler, compStyle}) => {
  return (
    <TouchableOpacity onPress={handler} style={compStyle}>
      {children}
    </TouchableOpacity>
  );
};