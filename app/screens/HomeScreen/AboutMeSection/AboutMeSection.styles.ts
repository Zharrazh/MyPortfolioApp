import {lightColors} from '@rneui/base';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: 16,
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
  },

  avatar: {
    marginRight: 12,
  },

  descriptionContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  descHeader: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  textOverflowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  status: {
    flex: 1,
    color: lightColors.grey2,
  },

  mainTechs: {
    flex: 1,
    color: lightColors.grey2,
  },

  sectionHeader: {
    color: lightColors.grey2,
    fontSize: 16,
    marginBottom: 16,
    fontWeight: '800',
  },

  contactsSection: {
    marginVertical: 12,
  },

  propsList: {
    marginVertical: -8,
    display: 'flex',
    flexDirection: 'column',
  },

  propItem: {
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },

  propName: {
    color: lightColors.grey2,
    marginRight: 8,
  },

  propValue: {},
});
