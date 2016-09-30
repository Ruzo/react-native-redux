import React, {Component} from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Header} from './comps/common';
import LibrariesList from './comps/LibrariesList';
import reducers from './reducers';
import * as actions from './actions';
import {AppStyle} from './comps/styles';

const store = createStore(reducers);
store.dispatch(actions.getLibraries());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={AppStyle.container} >
          <Header headerText="Tech Stack" />
          <LibrariesList />
        </View>
      </Provider>
    );
  }
}

export default App;