import {StyleSheet} from 'react-native';

export const colors = {
  headerBkgr: '#f8f8f8',
  headerShadow: '#000',
  cardBorder: '#ddd',
  cardShadow: '#000',
  cardSectBkgr: '#fff',
  buttonLogBorder: '#007aff',
  buttonLogBkgr: '#fff',
  buttonSignupBorder: '#D1A61A',
  buttonSignupBkgr: '#fff',
  buttonTouchText: '#007aff',
  buttonSignupText: '#D1A61A',
  inputFieldText: '#000',
  inputPlaceholder: '#bbb',
  errorTextColor: '#FC1E1E'
}

export const LoginStyle = StyleSheet.create({
  errorText: {
    color: colors.errorTextColor,
    fontSize: 14,
    alignSelf: 'center'
  }
})