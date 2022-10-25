import React, {FC, PropsWithChildren} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import {styles} from './{{pascalCase}}.styles';

export interface {{pascalCase}}Props {
  style?: StyleProp<ViewStyle>;
}

export const {{pascalCase}}: FC<PropsWithChildren<{{pascalCase}}Props>> = props => {
  const {children, style} = props;

  return <View style={[styles.root, style]}>{children}</View>;
};
