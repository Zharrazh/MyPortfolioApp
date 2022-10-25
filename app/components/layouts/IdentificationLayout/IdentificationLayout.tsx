import React, {FC, PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './IdentificationLayout.styles';

export interface IdentificationLayoutProps {
  style: StyleProp<ViewStyle>;
}

export const IdentificationLayout: FC<
  PropsWithChildren<IdentificationLayoutProps>
> = props => {
  const {children, style} = props;

  return <View style={[styles.root, style]}>{children}</View>;
};
