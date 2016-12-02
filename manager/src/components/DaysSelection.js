import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card, CardSection } from './common';
import { DaysSelectionStyle } from './styles';

const DaysSelection = (props) => {
  const { days, dayChangeHandler } = props;
  return (
    <Card>
      {days.map(dayObj => (
        <TouchableWithoutFeedback key={dayObj.day} onPress={() => dayChangeHandler(dayObj)}>
          <View>
            <CardSection
              style={
                dayObj.value ?
                  DaysSelectionStyle.daySelectedContainer :
                  DaysSelectionStyle.dayNotSelectedContainer
              }
            >
              <Text
                style={
                  dayObj.value ?
                  DaysSelectionStyle.daySelectedText :
                  DaysSelectionStyle.dayNotSelectedText
                }
              >{dayObj.day}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Card>
  );
};

DaysSelection.propTypes = {
  days: PropTypes.arrayOf(Object).isRequired,
  dayChangeHandler: PropTypes.func.isRequired,
};

export default DaysSelection;
