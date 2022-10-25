import {lightColors} from '@rneui/base';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  arrow: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    color: lightColors.primary,
  },
});
