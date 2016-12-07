import React, { PropTypes } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { SpinnerStyle } from './styles';

const Spinner = ({ loading }) => {
  if (loading) {
    return (
      <ActivityIndicator
        animating={loading}
        size="large"
        style={SpinnerStyle.container}
        />
    );
  }
  return <View />;
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ server }) => ({ loading: server.loading });

export default connect(mapStateToProps)(Spinner);
