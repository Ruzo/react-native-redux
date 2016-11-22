import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableWithoutFeedback, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as utils from '../utils';
// import { CardSection } from './common';
// import { ButtonStyle } from './common/styles';

class Employees extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(utils.employeesToArray(this.props.employees) || ['No employees.']),
    };
  }

  componentWillMount() {
    this.props.listenToEmployees(this.props.updateEmployeesList);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(utils.employeesToArray(nextProps.employees)),
    });
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={employee => (
          <TouchableWithoutFeedback onPress={() => Actions.employeePage({ employee })}>
            <View>
              <Text>{employee.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
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
