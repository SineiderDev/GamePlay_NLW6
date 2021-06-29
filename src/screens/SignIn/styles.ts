import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  image: {
    height: 360,
    width: '100%',
  },
  title: {
    fontSize: 40,
    lineHeight:40,
    marginBottom: 16,
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    fontSize: 15,
    lineHeight:25,
    marginBottom: 64,
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500
  },
  input: {
    height: 50,
    width: 200,
    borderBottomWidth: 2,
  }
})