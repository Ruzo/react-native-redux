/* eslint-disable import/prefer-default-export */

import React from 'react';
import { View } from 'react-native';
import { CardStyle } from './styles';

export const Card = ({ children, style }) => (
  <View style={[CardStyle.container, style]}>
    {children}
  </View>
);
