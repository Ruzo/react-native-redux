/* eslint-disable import/prefer-default-export */

import React, {PropTypes} from 'react';
import {TextInput, View, Text} from 'react-native';
import {InputStyle, colors} from './styles';

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  autoCorrect = false,
  secure = false,
  keyboardType = "default"
}) => {
  return (
    <View style={InputStyle.container}>
      {label && <Text style={InputStyle.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={InputStyle.field}
        autoCorrect={autoCorrect}
        placeholderTextColor={colors.inputPlaceholder}
        secureTextEntry = {secure}
        keyboardType ={keyboardType}
      />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  autoCorrect: PropTypes.bool,
  secure: PropTypes.bool,
  keyboardType: PropTypes.string
}