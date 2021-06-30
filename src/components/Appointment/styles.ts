import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    marginBottom: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  category:{
    fontSize: 13,
    marginRight: 24,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
  },
  footer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  playersInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    fontSize: 13,
    marginLeft: 7,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  },
  player: {
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  }
});