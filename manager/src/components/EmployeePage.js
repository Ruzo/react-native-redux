import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Pickr, Button } from './common';
import { daysOfWork } from '../settings';
import * as actions from '../actions';
import { ButtonStyle } from './common/styles';

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = { currentSchedule: this.props.schedule };

    this.pickerChangeHandler = this.pickerChangeHandler.bind(this);
    this.saveButtonHandler = this.saveButtonHandler.bind(this);
  }

  pickerChangeHandler(id, day) {
    this.props.scheduleChanged(id, day);
  }

  saveButtonHandler() {
    const { name, phone, schedule } = this.props;
    this.props.employeeSave({ name, phone, schedule });
  }

  render() {
    const { reducerKey, textChanged, schedule } = this.props;
    const pickerValues = daysOfWork.map(day => ({ label: day, value: day }));
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Name"
            onChangeText={text => textChanged(reducerKey, 'name', text)}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Phone number"
            keyboardType="phone-pad"
            onChangeText={text => textChanged(reducerKey, 'phone', text)}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          {schedule.map((shift, index) =>
            <Pickr
              key={index}
              selectedValue={shift}
              values={pickerValues}
              valueChangeHandler={this.pickerChangeHandler}
              pickerId={index}
            />,
          )}
        </CardSection>
        <CardSection>
          <Button
            handler={this.saveButtonHandler}
            compStyle={ButtonStyle.logButton}
          >
            <Text style={ButtonStyle.logInOutText}>Save</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}

EmployeePage.propTypes = {
  reducerKey: PropTypes.string.isRequired,
  textChanged: PropTypes.func.isRequired,
  scheduleChanged: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  schedule: PropTypes.arrayOf(String),
};

const mapStateToProps = ({ page }) => {
  const { name, phone, schedule } = page;
  const reducerKey = 'PAGE';
  return {
    name,
    phone,
    schedule,
    reducerKey,
  };
};

export default connect(mapStateToProps, actions)(EmployeePage);
