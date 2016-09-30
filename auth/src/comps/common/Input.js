import React from 'react';
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
      <Text style={InputStyle.label}>{label}</Text>
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