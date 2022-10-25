import React, {FC, PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

import {styles} from './MainLayout.styles';

export interface MainLayoutProps {
  isScrollView?: boolean;
  contentStyles?: StyleProp<ViewStyle>;
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = props => {
  const {children, isScrollView, contentStyles} = props;

  return (
    <SafeAreaView style={styles.root}>
      {isScrollView ? (
        <ScrollView style={contentStyles}>{children}</ScrollView>
      ) : (
        <View style={contentStyles}>{children}</View>
      )}
    </SafeAreaView>
  );
};
