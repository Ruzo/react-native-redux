/* eslint-disable import/prefer-default-export */

import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { ButtonStyle } from './styles';

export const Button = ({ children, handler, compStyle, disable }) =>
(
  <TouchableNativeFeedback
    onPress={handler}
    disabled={disable}
    background={TouchableNativeFeedback.SelectableBackground()}
  >
    <View style={[ButtonStyle.logButton, compStyle]}>
      {children}
    </View>
  </TouchableNativeFeedback>
);
