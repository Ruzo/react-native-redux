/* eslint-disable import/prefer-default-export */

import React, { PropTypes } from 'react';
import {
  Picker,
} from 'react-native';
import { PickerStyle } from './styles';

export const Pickr = (props) => {
  const { selectedValue, valueChangeHandler, values, pickerId } = props;
  const pickHandler = (value) => {
    valueChangeHandler(pickerId, value);
  };
  return (
    <Picker
      style={PickerStyle.container}
      selectedValue={selectedValue}
      onValueChange={pickHandler}
    >
      {values.map(({ label, value }) => <Picker.Item key={value} label={label} value={value} />)}
    </Picker>
  );
};

Pickr.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  valueChangeHandler: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(Object).isRequired,
  pickerId: PropTypes.number.isRequired,
};
