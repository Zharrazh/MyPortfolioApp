import {useAppNavigation} from '@navigation/Navigation';
import {Icon, lightColors, Text} from '@rneui/themed';
import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {AppTouchableOpacity} from '../AppTouchableOpacity';

import {styles} from './GoToPrevPage.styles';

export interface GoToPrevPageProps {
  style?: StyleProp<ViewStyle>;
  title?: string;
  to?: Parameters<ReturnType<typeof useAppNavigation>['reset']>[0];
}

export const GoToPrevPage: FC<GoToPrevPageProps> = props => {
  const {title, to, style} = props;

  const navigation = useAppNavigation();

  const onPressHandler = () => {
    if (to) {
      navigation.reset(to);
    } else {
      navigation.goBack();
    }
  };

  return (
    <AppTouchableOpacity onPress={onPressHandler}>
      <View style={[styles.root, style]}>
        <Text style={styles.arrow}>
          <Icon color={lightColors.primary} name="arrow-back" size={24} />
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </AppTouchableOpacity>
  );
};
