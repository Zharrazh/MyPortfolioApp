import React, {FC, PropsWithChildren} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import {styles} from './ContentContainer.styles';

export interface ContentContainerProps {
  style?: StyleProp<ViewStyle>;
}

export const ContentContainer: FC<
  PropsWithChildren<ContentContainerProps>
> = props => {
  const {children, style} = props;

  return <View style={[styles.root, style]}>{children}</View>;
};
