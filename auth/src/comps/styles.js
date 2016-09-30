import {StyleSheet} from 'react-native';

export const colors = {
  errorText: 'red'
}

export const LoginPageStyle = StyleSheet.create({
  container: {
    flex: 1
  }
});

export const SpinnerStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    justifyContent: 'center'
  },
  spinner: {
    alignSelf: 'center',
  }
});

export const ErrorTextStyle = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: colors.errorText,
    fontSize: 14,
    marginTop: 5
  }
});