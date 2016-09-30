import {StyleSheet} from 'react-native';

const colors = {
  headerBkgr: '#f8f8f8',
  headerShadow: '#000',
  cardBorder: '#ddd',
  cardShadow: '#000',
  cardSectBkgr: '#fff',
  buyTouchBorder: '#007aff',
  buyTouchBkgr: '#fff',
  buyTouchText: '#007aff'
}

export const AppStyle = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

export const HeaderStyle = StyleSheet.create({
  mainView: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.headerBkgr,
    shadowColor: colors.headerShadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2
  },
  text: {
    fontSize: 20
  }
});

export const CardStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.cardBorder,
    borderBottomWidth: 0,
    shadowColor: colors.cardShadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export const CardSectionStyle = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: colors.cardBorder,
    backgroundColor: colors.cardSectBkgr,
  }
});

export const CardHeader = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 18
  }
});

export const CardImage = StyleSheet.create({
  image: {
    height: 300,
    flex: 1,
    width: null
  }
});

export const BuyButton = StyleSheet.create({
  touchable: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.buyTouchBkgr,
    borderColor: colors.buyTouchBorder,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  text: {
    alignSelf: 'center',
    color: colors.buyTouchText,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})