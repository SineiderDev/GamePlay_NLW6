import{StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  user:{
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 24,
    marginRight: 6,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
  },
  username: {
    fontSize: 24,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  message: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
  },
});