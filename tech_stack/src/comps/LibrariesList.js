import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import LibraryDetails from './LibraryDetails';

class LibrariesList extends Component {
  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.libraries)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <LibraryDetails library={rowData} />
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries
  };
}

export default connect(mapStateToProps)(LibrariesList);