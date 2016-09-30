import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const BuyButton = ({label, handler, compStyle, labelStyle}) => {
  return (
    <TouchableOpacity onPress={handler} style={compStyle}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BuyButton;