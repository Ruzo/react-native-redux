import { StyleSheet } from 'react-native';
import { headerShadow, cardShadow, buttonBkgColor } from './crossStyles';

export const colors = {
  headerBkgr: '#f8f8f8',
  headerShadow: '#000',
  cardBorder: '#ddd',
  cardShadow: '#000',
  cardSectBkgr: '#fff',
  buttonLogBorder: '#007aff',
  buttonLogBkgr: buttonBkgColor,
  buttonSignupBorder: '#D1A61A',
  buttonSignupBkgr: buttonBkgColor,
  buttonTouchText: '#007aff',
  buttonSignupText: '#D1A61A',
  buttonDeleteBorder: '#CE2B27',
  buttonDeleteBkgr: '#fff',
  buttonDeleteText: '#CE2B27',
  inputFieldText: '#000',
  inputPlaceholder: '#bbb',
};

export const HeaderStyle = StyleSheet.create({
  mainView: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.headerBkgr,
    ...headerShadow,
  },
  text: {
    fontSize: 20,
  },
});

export const CardStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.cardBorder,
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    ...cardShadow,
  },
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
  },
});

export const CardHeader = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
});

export const CardImage = StyleSheet.create({
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export const ButtonStyle = StyleSheet.create({
  logInOut: {
    backgroundColor: colors.buttonLogBkgr,
    borderColor: colors.buttonLogBorder,
  },
  signUp: {
    backgroundColor: colors.buttonSignupBkgr,
    borderColor: colors.buttonSignupBorder,
  },
  logInOutText: {
    color: colors.buttonTouchText,
  },
  signUpText: {
    color: colors.buttonSignupText,
  },
  delete: {
    backgroundColor: colors.buttonDeleteBkgr,
    borderColor: colors.buttonDeleteBorder,
  },
  deleteText: {
    color: colors.deleteText,
  },
  logButton: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  logText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export const InputStyle = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  field: {
    color: colors.inputFieldText,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
});

export const PickerStyle = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
  },
});

export const PopupStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  message: {
    fontSize: 22,
    fontWeight: '400',
  },
});
