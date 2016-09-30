import {StyleSheet} from 'react-native';

export const AppStyle = StyleSheet.create({
  container: {
    flex: 1
  }
});

export const LibraryStyle = StyleSheet.create({
  titleContainer: {
    flex: 1
  },

  titleText: {
    fontSize: 24,
    fontWeight: '300',
    paddingLeft: 10
  },

  descriptionContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },

  descriptionText: {
    fontSize: 20
  }
});