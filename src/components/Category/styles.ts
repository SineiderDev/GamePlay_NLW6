import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary40,
  },
  title: {
    fontSize: 15,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
  },
  check: {
    width: 12,
    height: 12,
    marginRight: 7,
    borderWidth: 2,
    borderRadius: 3,
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary100,
  },
  checked:{
    width: 10,
    height: 10,
    marginRight: 7,
    borderWidth: 2,
    borderRadius: 3,
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
  }
})