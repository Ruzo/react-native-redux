import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Card, CardSection, Button } from './';
import { ButtonStyle, PopupStyle } from './styles';

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
    };

    this.deleteConfirmed = this.deleteConfirmed.bind(this);
  }

  deleteConfirmed() {
    this.setState({ visible: false });
    this.props.yesButtonHandler();
  }

  render() {
    const {
      message,
      yesButtonText,
      noButtonText,
    } = this.props;
    if (this.state.visible) {
      return (
        <View style={PopupStyle.container}>
          <Card>
            <CardSection style={{ width: 300, height: 60 }}>
              <Text style={PopupStyle.message}>{message}</Text>
            </CardSection>
            <CardSection>
              <Button
                handler={this.deleteConfirmed}
                compStyle={[ButtonStyle.logButton, ButtonStyle.logInOut]}
                >
                <Text style={[ButtonStyle.logText, ButtonStyle.logInOutText]}>{yesButtonText}</Text>
              </Button>
              <Button
                handler={() => this.setState({ visible: false })}
                compStyle={[ButtonStyle.logButton, ButtonStyle.delete]}
                >
                <Text style={[ButtonStyle.logText, ButtonStyle.deleteText]}>{noButtonText}</Text>
              </Button>
            </CardSection>
          </Card>
        </View>
      );
    }
    return <View />;
  }
}

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  yesButtonText: PropTypes.string.isRequired,
  noButtonText: PropTypes.string.isRequired,
  yesButtonHandler: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Popup;
