/* eslint-disable import/prefer-default-export */

import React from 'react';
import {View, Text} from 'react-native';
import CardSection from './CardSection';
import {CardStyle} from './styles';

export const Card = ({children}) => {
  return (
    <View style={CardStyle.container}>
      {children}
    </View>
  );
};