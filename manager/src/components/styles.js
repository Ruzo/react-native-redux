import { StyleSheet } from 'react-native';

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
  errorTextColor: '#FC1E1E',
  daySelectedBkg: '#4BFF33',
  dayNotSelectedBkg: '#CCCEDB',
  daySelectedText: '#494A4E',
  dayNotSelectedText: '#85868E',
};

export const LoginStyle = StyleSheet.create({
  errorText: {
    color: colors.errorTextColor,
    fontSize: 14,
    alignSelf: 'center',
  },
});

export const EmployeesStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.cardBorder,
    backgroundColor: colors.cardSectBkgr,
  },
  text: {
    fontSize: 20,
  },
});

export const DaysSelectionStyle = StyleSheet.create({
  daySelectedContainer: {
    backgroundColor: colors.daySelectedBkg,
  },
  daySelectedText: {
    color: colors.daySelectedText,
  },
  dayNotSelectedContainer: {
    backgroundColor: colors.dayNotSelectedBkg,
  },
  dayNotSelectedText: {
    color: colors.dayNotSelectedText,
  },
});

export const ConfirmationStyle = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});

export const SpinnerStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
