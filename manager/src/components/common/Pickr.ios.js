/* eslint-disable import/prefer-default-export */

import React, { Component, PropTypes } from 'react';
import {
  PickerIOS,
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import { PickerStyle } from './styles';

export class Pickr extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };
  }

  showPicker() {
    this.setState({ modalVisible: true });
  }

  pickHandler(value) {
    this.setState({ modalVisible: true });
    this.props.valueChangeHandler(this.props.pickerId, value);
  }

  render() {
    const { selectedValue, values } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback>
          <View>
            <Text>{selectedValue}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          animationType={'slide'}
          visible={this.state.modalVisible}
        >
          <PickerIOS
            style={PickerStyle.container}
            selectedValue={selectedValue}
            onValueChange={this.pickHandler}
          >
            {values.map(({ label, value }) => <PickerIOS.Item
              key={value}
              label={label}
              value={value}
            />)}
          </PickerIOS>
        </Modal>
      </View>
    );
  }
}

Pickr.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  valueChangeHandler: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(Object).isRequired,
  pickerId: PropTypes.number.isRequired,
};
