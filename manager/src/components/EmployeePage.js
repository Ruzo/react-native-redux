import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import DaysSelection from './DaysSelection';
import { Card, CardSection, Input, Button } from './common';
import * as actions from '../actions';
import { ButtonStyle } from './common/styles';
import { objectsToArray, sortByDays } from '../utils';

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.dayChangeHandler = this.dayChangeHandler.bind(this);
    this.saveButtonHandler = this.saveButtonHandler.bind(this);
    this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
  }

  componentWillMount() {
    if (this.props.employee) {
      const { name, phone, schedule } = this.props.employee.value;
      this.props.updateFields({ name, phone, schedule });
    } else {
      this.props.resetFields();
    }
  }

  dayChangeHandler(dayObj) {
    this.props.scheduleChanged({ [dayObj.day]: !dayObj.value });
  }

  saveButtonHandler() {
    const { name, phone, schedule, employee } = this.props;
    if (employee) {
      this.props.employeeUpdate({ id: employee.id, name, phone, schedule });
    } else {
      this.props.employeeSave({ name, phone, schedule });
    }
  }

  deleteButtonHandler() {
    // TODO: Add confirmation modal
    const { employee } = this.props;
    this.props.employeeDelete(employee.id);
  }

  render() {
    const { reducerKey, textChanged, name, phone, schedule, employee } = this.props;
    const scheduleList = objectsToArray(schedule, 'day').sort(sortByDays);
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={text => textChanged(reducerKey, 'name', text)}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Phone number"
            value={phone}
            keyboardType="phone-pad"
            onChangeText={text => textChanged(reducerKey, 'phone', text)}
          />
        </CardSection>
        <DaysSelection
          days={scheduleList}
          dayChangeHandler={this.dayChangeHandler}
        />
        <CardSection>
          <Button
            handler={this.saveButtonHandler}
            compStyle={[ButtonStyle.logButton, ButtonStyle.logInOut]}
          >
            <Text style={[ButtonStyle.logText, ButtonStyle.logInOutText]}>Save</Text>
          </Button>
        </CardSection>
        {employee && <CardSection>
          <Button
            handler={this.deleteButtonHandler}
            compStyle={[ButtonStyle.logButton, ButtonStyle.delete]}
          >
            <Text style={[ButtonStyle.logText, ButtonStyle.deleteText]}>Fire</Text>
          </Button>
        </CardSection>}
      </Card>
    );
  }
}

EmployeePage.propTypes = {
  reducerKey: PropTypes.string.isRequired,
  textChanged: PropTypes.func.isRequired,
  scheduleChanged: PropTypes.func.isRequired,
  updateFields: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
  employeeDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  schedule: PropTypes.objectOf(Object).isRequired,
  employee: PropTypes.objectOf(Object),
};

const mapStateToProps = ({ page, schedule }) => {
  const { name, phone } = page;
  const reducerKey = 'PAGE';
  return {
    name,
    phone,
    schedule,
    reducerKey,
  };
};

export default connect(mapStateToProps, actions)(EmployeePage);
