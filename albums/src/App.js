import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './components/Header';
import AlbumsList from './components/AlbumsList';
import {AppStyle} from './styles';

class App extends Component {
  render() {
    return (
      <View style={AppStyle.mainView}>
        <Header headerText="ALBUMS"/>
        <AlbumsList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);