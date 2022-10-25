import {lightColors} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 12,
  },

  loginTipContainer: {
    marginTop: 24,
  },

  loginTipText: {
    fontSize: 18,
  },

  loginLink: {
    color: lightColors.primary,
    textDecorationLine: 'underline',
  },
});
