/* eslint-disable import/prefer-default-export */

import React from 'react';
import {View, Text} from 'react-native';
import {HeaderStyle} from './styles';

export const Header = ({headerText}) => {
  return (
    <View style={HeaderStyle.mainView}>
      <Text style={HeaderStyle.text} >{headerText}</Text>
    </View>
  );
};