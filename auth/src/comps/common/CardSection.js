import React from 'react';
import {View} from 'react-native';
import {CardSectionStyle} from './styles';

export const CardSection = ({children}) => {
  return (
    <View style={CardSectionStyle.container}>
      {children}
    </View>
  );
};