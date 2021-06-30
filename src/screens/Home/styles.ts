import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 42,
    marginTop: getStatusBarHeight()+26,
    width: "100%",
    flexDirection: 'row',
    justifyContent:'space-between',
  }
});