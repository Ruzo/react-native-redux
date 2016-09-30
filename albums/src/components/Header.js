import React from 'react';
import {View, Text} from 'react-native';
import {HeaderStyle} from '../styles';

const Header = ({headerText}) => {
  return (
    <View style={HeaderStyle.mainView}>
      <Text style={HeaderStyle.text} >{headerText}</Text>
    </View>
  );
};

export default Header;