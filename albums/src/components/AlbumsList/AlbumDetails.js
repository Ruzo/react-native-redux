import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {CardHeader, CardImage, BuyButton} from '../../styles';

const AlbumDetails = ({album:{title, artist, url, image, thumbnail_image}, buttonHandler}) => {
  return (
    <Card>
      <CardSection>
        <View style={CardHeader.container}>
          <View style={CardHeader.thumbnailContainer}>
            <Image source={{uri: thumbnail_image}} style={CardHeader.thumbnail} />
          </View>
          <View style={CardHeader.textContainer}>
            <Text style={CardHeader.title} >{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{uri: image}} style={CardImage.image} />
      </CardSection>
        <Button
          label="Buy Album"
          handler={() => buttonHandler(url)}
          compStyle={BuyButton.touchable}
          labelStyle={BuyButton.text}
          />
      <CardSection>

      </CardSection>
    </Card>
  );
};

export default AlbumDetails;