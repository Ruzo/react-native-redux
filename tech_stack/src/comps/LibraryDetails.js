import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager
} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection} from './common';
import * as actions from '../actions';
import {LibraryStyle} from './styles';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class LibraryDetails extends Component {
  componentWillMount(){
    LayoutAnimation.spring();
  }

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  render(){
    const {selectLibrary, library, selected} = this.props;
    return (
      <Card>
        <CardSection>
          <TouchableWithoutFeedback onPress={() => selectLibrary(library.id)}>
            <View style={LibraryStyle.titleContainer}>
              <Text style={LibraryStyle.titleText}>{library.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        </CardSection>
        {selected === library.id &&
          <CardSection>
            <View style={LibraryStyle.descriptionContainer}>
              <Text style={LibraryStyle.descriptionText}>
                {library.description}
              </Text>
            </View>
          </CardSection>}
      </Card>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selected: state.selected
  }
}

export default connect(mapStateToProps, actions)(LibraryDetails);