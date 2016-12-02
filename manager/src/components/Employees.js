import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableWithoutFeedback, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';
import { objectsToArray } from '../utils';
import { EmployeesStyle } from './styles';

class Employees extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(objectsToArray(this.props.employees, 'id') || ['No employees.']),
    };
  }

  componentWillMount() {
    this.props.listenToEmployees(this.props.updateEmployeesList);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(objectsToArray(nextProps.employees, 'id')),
    });
  }

  render() {
    return (
      <Card style={{ flex: 1 }}>
        <ListView
          style={EmployeesStyle.container}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={employee => (
            <TouchableWithoutFeedback onPress={() => Actions.employeePage({ employee })}>
              <View>
                <CardSection>
                  <Text style={EmployeesStyle.text}>{employee.value.name}</Text>
                </CardSection>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </Card>
    );
  }
}

Employees.propTypes = {
  listenToEmployees: PropTypes.func.isRequired,
  updateEmployeesList: PropTypes.func.isRequired,
  employees: PropTypes.objectOf(Object),
};

const mapStateToProps = ({ employees }) => ({ employees });

export default connect(mapStateToProps, actions)(Employees);
