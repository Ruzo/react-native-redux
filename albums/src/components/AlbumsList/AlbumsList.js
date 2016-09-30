import React, {Component} from 'react';
import {ScrollView, Text, Linking} from 'react-native';
import {getAlbums} from '../../api';
import AlbumDetails from './AlbumDetails';

class AlbumsList extends Component {
  constructor(props){
    super(props);

    this.state = {
      albums: []
    }
  }
  componentWillMount(){
    getAlbums().then(response => this.setState({albums: response.data}));
  }
  buyButtonHandler(url){
    Linking.openURL(url)
  }
  render() {
    console.log('TESTING');
    if(this.state.albums) {
      return (
        <ScrollView>
          {this.state.albums.map((album, index) =>
            <AlbumDetails
              key={index}
              album={album}
              buttonHandler={this.buyButtonHandler.bind(this)}
            />
          )}
        </ScrollView>
      );
    } else{
      return <Text>Loading...</Text>
    }
  }
}

export default AlbumsList;