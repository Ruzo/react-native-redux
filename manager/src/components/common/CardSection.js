/* eslint-disable import/prefer-default-export */

import React from 'react';
import { View } from 'react-native';
import { CardSectionStyle } from './styles';

export const CardSection = ({ children, style }) =>
  (
    <View style={[CardSectionStyle.container, style]}>
      {children}
    </View>
  );
