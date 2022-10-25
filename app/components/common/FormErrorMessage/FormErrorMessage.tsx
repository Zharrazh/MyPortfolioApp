import {Text} from '@rneui/themed';
import React, {FC, PropsWithChildren} from 'react';

import {styles} from './FormErrorMessage.styles';

export interface FormErrorMessageProps {}

export const FormErrorMessage: FC<
  PropsWithChildren<FormErrorMessageProps>
> = props => {
  const {children} = props;

  return <Text style={styles.root}>{children}</Text>;
};
